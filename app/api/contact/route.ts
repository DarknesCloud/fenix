import { NextRequest, NextResponse } from 'next/server';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const TURNSTILE_VERIFY_ENDPOINT =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify';

const allowedServices = new Map([
  ['software-web', 'Desarrollo de Software / Sitio Web'],
  ['infrastructure', 'Infraestructura & Redes'],
  ['support', 'Soporte Técnico & Mantenimiento'],
  ['consulting', 'Consultoría Tecnológica General'],
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
  formStartedAt?: unknown;
  turnstileToken?: unknown;
};

type TurnstileResponse = {
  success: boolean;
  action?: string;
  hostname?: string;
  'error-codes'?: string[];
};

function asTrimmedString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function allowedOrigins() {
  const origins = new Set<string>([
    'https://fenixsolutionshn.com',
    'https://www.fenixsolutionshn.com',
    'http://localhost:3000',
  ]);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (siteUrl) {
    try {
      origins.add(new URL(siteUrl).origin);
    } catch {
      // Invalid configuration is handled by the canonical fallback elsewhere.
    }
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) origins.add(`https://${vercelUrl}`);

  return origins;
}

async function verifyTurnstile(token: string, remoteIp?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return false;

  const formData = new FormData();
  formData.set('secret', secret);
  formData.set('response', token);
  if (remoteIp) formData.set('remoteip', remoteIp);

  const response = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
    method: 'POST',
    body: formData,
    cache: 'no-store',
  });

  if (!response.ok) return false;

  const result = (await response.json()) as TurnstileResponse;
  return result.success && result.action === 'contact';
}

function jsonError(message: string, status: number) {
  return NextResponse.json(
    { ok: false, message },
    {
      status,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  );
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin || !allowedOrigins().has(origin)) {
    return jsonError('Origen de solicitud no permitido.', 403);
  }

  const contentLength = Number(request.headers.get('content-length') ?? 0);
  if (contentLength > 20_000) {
    return jsonError('La solicitud es demasiado grande.', 413);
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return jsonError('No pudimos interpretar los datos enviados.', 400);
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email).toLowerCase();
  const phone = asTrimmedString(body.phone);
  const service = asTrimmedString(body.service);
  const message = asTrimmedString(body.message);
  const website = asTrimmedString(body.website);
  const formStartedAt = Number(body.formStartedAt);
  const turnstileToken = asTrimmedString(body.turnstileToken);

  // Honeypot: bots frequently fill fields that are invisible to real visitors.
  if (website) {
    return NextResponse.json(
      { ok: true },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  }

  if (
    !name ||
    name.length > 120 ||
    !email ||
    email.length > 254 ||
    !isValidEmail(email) ||
    phone.length > 50 ||
    !allowedServices.has(service) ||
    !message ||
    message.length < 10 ||
    message.length > 3000
  ) {
    return jsonError('Revisa los campos del formulario e inténtalo de nuevo.', 400);
  }

  if (
    !Number.isFinite(formStartedAt) ||
    formStartedAt <= 0 ||
    Date.now() - formStartedAt < 2500 ||
    Date.now() - formStartedAt > 86_400_000
  ) {
    return jsonError('No pudimos validar el formulario. Recarga la página.', 400);
  }

  if (!turnstileToken) {
    return jsonError('Completa la verificación de seguridad.', 400);
  }

  const forwardedFor = request.headers.get('x-forwarded-for');
  const remoteIp = forwardedFor?.split(',')[0]?.trim();

  try {
    const verified = await verifyTurnstile(turnstileToken, remoteIp);
    if (!verified) {
      return jsonError(
        'La verificación de seguridad expiró o no fue válida. Inténtalo nuevamente.',
        400,
      );
    }
  } catch {
    return jsonError(
      'No pudimos completar la verificación de seguridad. Inténtalo nuevamente.',
      502,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'admin@fenixsolutionshn.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error('Contact form email delivery is not configured.');
    return jsonError(
      'El formulario está temporalmente fuera de servicio. Escríbenos por correo.',
      503,
    );
  }

  const serviceLabel = allowedServices.get(service) ?? service;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || 'No proporcionado');
  const safeService = escapeHtml(serviceLabel);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

  const subject = `Nueva consulta web · ${serviceLabel}`;
  const text = [
    'Nueva consulta recibida desde fenixsolutionshn.com',
    '',
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Teléfono / WhatsApp: ${phone || 'No proporcionado'}`,
    `Servicio o necesidad: ${serviceLabel}`,
    '',
    'Mensaje:',
    message,
  ].join('\n');

  const html = `
    <div style="font-family:Arial,sans-serif;color:#0b2239;line-height:1.6;max-width:640px;margin:0 auto">
      <h1 style="font-size:22px;margin-bottom:20px">Nueva consulta desde Fénix Solutions</h1>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
        <tr><td style="padding:8px 0;font-weight:700;width:170px">Nombre</td><td>${safeName}</td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Correo</td><td>${safeEmail}</td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Teléfono / WhatsApp</td><td>${safePhone}</td></tr>
        <tr><td style="padding:8px 0;font-weight:700">Servicio o necesidad</td><td>${safeService}</td></tr>
      </table>
      <div style="border-top:1px solid #e2d5b6;padding-top:20px">
        <strong>Mensaje</strong>
        <p style="margin-top:10px">${safeMessage}</p>
      </div>
    </div>
  `;

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'User-Agent': 'FenixSolutions/1.0 (+https://fenixsolutionshn.com)',
        'Idempotency-Key': crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: `Fénix Solutions Web <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
        text,
        tags: [
          { name: 'source', value: 'website' },
          { name: 'form', value: 'contact' },
        ],
      }),
      cache: 'no-store',
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error('Resend contact form error:', resendResponse.status, errorBody);
      return jsonError(
        'No pudimos enviar tu mensaje en este momento. Inténtalo nuevamente.',
        502,
      );
    }
  } catch (error) {
    console.error('Contact form delivery failed:', error);
    return jsonError(
      'No pudimos enviar tu mensaje en este momento. Inténtalo nuevamente.',
      502,
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: 'Gracias. Recibimos tu mensaje y podremos responderte por correo.',
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  );
}
