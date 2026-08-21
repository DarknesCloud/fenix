'use client';

import { type FormEvent, useRef, useState } from 'react';
import Script from 'next/script';
import { ArrowForward } from '@mui/icons-material';
import styles from './ContactForm.module.scss';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

type TurnstileWindow = Window & {
  turnstile?: {
    reset: () => void;
  };
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState(
    'Los campos marcados con * son obligatorios.',
  );
  const formStartedAt = useRef(Date.now());

  const resetTurnstile = () => {
    if (typeof window === 'undefined') return;
    (window as TurnstileWindow).turnstile?.reset();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const turnstileToken = String(
      formData.get('cf-turnstile-response') ?? '',
    ).trim();

    if (!turnstileToken) {
      setStatus('error');
      setStatusMessage('Completa la verificación de seguridad antes de enviar.');
      return;
    }

    setStatus('sending');
    setStatusMessage('Enviando tu mensaje…');

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      website: formData.get('website'),
      formStartedAt: formStartedAt.current,
      turnstileToken,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus('error');
        setStatusMessage(
          result.message ??
            'No pudimos enviar tu mensaje. Inténtalo nuevamente.',
        );
        resetTurnstile();
        return;
      }

      form.reset();
      formStartedAt.current = Date.now();
      setStatus('success');
      setStatusMessage(
        result.message ??
          'Gracias. Recibimos tu mensaje y podremos responderte por correo.',
      );
      resetTurnstile();
    } catch {
      setStatus('error');
      setStatusMessage(
        'No pudimos conectarnos con el servicio de envío. Inténtalo nuevamente.',
      );
      resetTurnstile();
    }
  };

  const buttonLabel =
    status === 'sending'
      ? 'Enviando...'
      : status === 'success'
        ? 'Mensaje enviado'
        : 'Enviar mensaje';

  return (
    <>
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      )}

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        noValidate
        aria-busy={status === 'sending'}
      >
        <div className={styles.fieldGrid}>
          <label>
            <span>
              Nombre completo <b>*</b>
            </span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={120}
              placeholder="Tu nombre"
            />
          </label>

          <label>
            <span>
              Correo electrónico <b>*</b>
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="nombre@organizacion.com"
            />
          </label>
        </div>

        <div className={styles.fieldGrid}>
          <label>
            <span>
              Teléfono / WhatsApp <small>Opcional</small>
            </span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={50}
              placeholder="Tu número de contacto"
            />
          </label>

          <label>
            <span>
              Tipo de servicio o necesidad <b>*</b>
            </span>
            <select name="service" defaultValue="" required>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="software-web">
                Desarrollo de Software / Sitio Web
              </option>
              <option value="infrastructure">Infraestructura &amp; Redes</option>
              <option value="support">
                Soporte Técnico &amp; Mantenimiento
              </option>
              <option value="consulting">Consultoría Tecnológica General</option>
            </select>
          </label>
        </div>

        <label className={styles.messageField}>
          <span>
            Mensaje <b>*</b>
          </span>
          <textarea
            name="message"
            rows={7}
            required
            minLength={10}
            maxLength={3000}
            placeholder="Cuéntanos sobre la necesidad, el contexto o el reto que quieres resolver."
          />
        </label>

        <div className={styles.honeypot} aria-hidden="true">
          <label>
            Sitio web
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className={styles.securityRow}>
          {turnstileSiteKey ? (
            <div
              className="cf-turnstile"
              data-sitekey={turnstileSiteKey}
              data-action="contact"
              data-theme="light"
            />
          ) : (
            <p className={styles.securityUnavailable}>
              La verificación de seguridad está pendiente de configuración.
            </p>
          )}
        </div>

        <div className={styles.formFooter}>
          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'sending' || !turnstileSiteKey}
          >
            <span>{buttonLabel}</span>
            <ArrowForward aria-hidden="true" />
          </button>

          <p
            role="status"
            aria-live="polite"
            className={status === 'error' ? styles.errorMessage : undefined}
          >
            {statusMessage}
          </p>
        </div>
      </form>
    </>
  );
}
