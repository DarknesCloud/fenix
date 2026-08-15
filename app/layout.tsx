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

export const metadata: Metadata = {
  title: 'Fénix Solutions | Tecnología con Propósito',

  description:
    'Fénix Solutions desarrolla soluciones tecnológicas personalizadas para organizaciones que buscan crecer, evolucionar y aprovechar mejor la tecnología.',

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
    title: 'Fénix Solutions | Tecnología con Propósito',
    description:
      'Fénix Solutions desarrolla soluciones tecnológicas personalizadas para organizaciones que buscan crecer, evolucionar y aprovechar mejor la tecnología.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <a className="skipLink" href="#main-content">
          Saltar al contenido principal
        </a>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
