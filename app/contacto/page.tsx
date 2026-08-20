import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { EmailOutlined, LocationOnOutlined } from '@mui/icons-material';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta a Fénix Solutions para conversar sobre desarrollo de software, soluciones tecnológicas o acompañamiento tecnológico en Honduras.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto | Fénix Solutions',
    description:
      'Conversemos sobre la necesidad tecnológica de tu empresa u organización.',
    url: '/contacto',
    type: 'website',
    images: [
      {
        url: '/images/contact-fenix.png',
        alt: 'Contacto — Fénix Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Fénix Solutions',
    description:
      'Conversemos sobre la necesidad tecnológica de tu empresa u organización.',
    images: ['/images/contact-fenix.png'],
  },
};

const contactEmail =
  process.env.NEXT_PUBLIC_FENIX_EMAIL ?? 'admin@fenixsolutionshn.com';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.contactSection}>
          <div className={styles.contactArtwork} aria-hidden="true">
            <Image
              src="/images/contact-fenix.png"
              alt=""
              fill
              sizes="(max-width: 768px) 0px, 58vw"
            />
          </div>

          <div className="container">
            <Link href="/" className={styles.backLink}>
              ← Volver al inicio
            </Link>

            <div className={styles.intro}>
              <span>-- CONTACTO</span>

              <h1>Iniciemos una conversación</h1>

              <p>
                Cuéntanos qué necesitas resolver y comparte el contexto que
                consideres importante. Ese será nuestro punto de partida.
              </p>
            </div>

            <div className={styles.contactGrid}>
              <aside
                className={styles.channels}
                aria-label="Información de contacto"
              >
                <a
                  className={styles.channelCard}
                  href={`mailto:${contactEmail}`}
                >
                  <span className={styles.channelIcon}>
                    <EmailOutlined />
                  </span>

                  <span>
                    <strong>Correo electrónico</strong>
                    <small>{contactEmail}</small>
                  </span>

                  <b>↗</b>
                </a>

                <div className={styles.details}>
                  <div>
                    <LocationOnOutlined aria-hidden="true" />

                    <span>
                      <strong>Ubicación</strong>
                      San Pedro Sula, Honduras
                    </span>
                  </div>
                </div>
              </aside>

              <section
                id="formulario"
                className={styles.formPanel}
                aria-labelledby="form-title"
              >
                <span>ESCRÍBENOS</span>

                <h2 id="form-title">Cuéntanos en qué podemos ayudarte.</h2>

                <p>
                  Comparte algunos detalles. Empezaremos por comprender tu
                  necesidad.
                </p>

                <ContactForm />
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
