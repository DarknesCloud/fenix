import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.scss';
import Providers from './providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
);

const title = 'Fénix Solutions | Tecnología con Propósito';
const description =
  'Desarrollo de software personalizado, soluciones tecnológicas y acompañamiento para empresas y organizaciones en San Pedro Sula, Honduras.';

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: '%s | Fénix Solutions',
  },
  description,
  applicationName: 'Fénix Solutions',
  authors: [{ name: 'Fénix Solutions' }],
  creator: 'Fénix Solutions',
  publisher: 'Fénix Solutions',
  category: 'technology',
  keywords: [
    'Fénix Solutions',
    'desarrollo de software Honduras',
    'desarrollo de software San Pedro Sula',
    'software personalizado',
    'soluciones tecnológicas',
    'acompañamiento tecnológico',
    'infraestructura tecnológica',
    'soporte tecnológico',
    'desarrollo web Honduras',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/images/fenix-icon.png',
        type: 'image/png',
      },
    ],
    shortcut: '/images/fenix-icon.png',
    apple: '/images/fenix-icon.png',
  },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Fénix Solutions',
    locale: 'es_HN',
    type: 'website',
    images: [
      {
        url: '/images/contact-fenix.png',
        alt: 'Fénix Solutions — Tecnología con propósito',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/contact-fenix.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const sameAs = [
  process.env.NEXT_PUBLIC_FENIX_FACEBOOK_URL,
  process.env.NEXT_PUBLIC_FENIX_INSTAGRAM_URL,
].filter((url): url is string => Boolean(url));

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Fénix Solutions',
  url: siteUrl.toString(),
  logo: new URL('/images/fenix-navbar.png', siteUrl).toString(),
  image: new URL('/images/contact-fenix.png', siteUrl).toString(),
  description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Pedro Sula',
    addressCountry: 'HN',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Honduras',
  },
  knowsAbout: [
    'Desarrollo de software personalizado',
    'Soluciones tecnológicas',
    'Infraestructura y redes',
    'Presencia digital',
    'Acompañamiento tecnológico',
  ],
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-HN">
      <body className={inter.variable}>
        <a className="skipLink" href="#main-content">
          Saltar al contenido principal
        </a>

        <Providers>{children}</Providers>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
