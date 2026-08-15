import Image from 'next/image';
import Link from 'next/link';

import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocationOnOutlined,
  ScheduleOutlined,
  WhatsApp,
} from '@mui/icons-material';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';

import styles from './page.module.scss';

const contactLinks = {
  whatsapp:
    process.env.NEXT_PUBLIC_FENIX_WHATSAPP_URL ??
    'https://wa.me/?text=Hola%2C%20quiero%20conversar%20con%20F%C3%A9nix%20Solutions.',

  email: process.env.NEXT_PUBLIC_FENIX_EMAIL
    ? `mailto:${process.env.NEXT_PUBLIC_FENIX_EMAIL}`
    : 'mailto:',

  facebook:
    process.env.NEXT_PUBLIC_FENIX_FACEBOOK_URL ?? 'https://www.facebook.com/',

  instagram:
    process.env.NEXT_PUBLIC_FENIX_INSTAGRAM_URL ?? 'https://www.instagram.com/',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.contactSection}>
          {/* =================================================
              AMBIENT FÉNIX ARTWORK
             ================================================= */}

          <div className={styles.contactArtwork} aria-hidden="true">
            <Image
              src="/images/contact-fenix.png"
              alt=""
              fill
              priority
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
                Elige el canal de tu preferencia para ponerte en contacto con
                nuestro equipo.
              </p>
            </div>

            <div className={styles.contactGrid}>
              <aside
                className={styles.channels}
                aria-label="Canales de contacto"
              >
                <a
                  className={`${styles.channelCard} ${styles.whatsapp}`}
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.channelIcon}>
                    <WhatsApp />
                  </span>

                  <span>
                    <strong>WhatsApp Directo</strong>

                    <small>Chat directo por WhatsApp</small>
                  </span>

                  <b>↗</b>
                </a>

                <a className={styles.channelCard} href={contactLinks.email}>
                  <span className={styles.channelIcon}>
                    <EmailOutlined />
                  </span>

                  <span>
                    <strong>Correo Electrónico</strong>

                    <small>Envíanos un correo electrónico</small>
                  </span>

                  <b>↗</b>
                </a>

                <div className={styles.socialCard}>
                  <span>REDES OFICIALES</span>

                  <div>
                    <a
                      href={contactLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook de Fénix Solutions"
                    >
                      <Facebook />
                    </a>

                    <a
                      href={contactLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram de Fénix Solutions"
                    >
                      <Instagram />
                    </a>
                  </div>
                </div>

                <div className={styles.details}>
                  <div>
                    <LocationOnOutlined aria-hidden="true" />

                    <span>
                      <strong>Ubicación</strong>
                      San Pedro Sula, Honduras
                    </span>
                  </div>

                  <div>
                    <ScheduleOutlined aria-hidden="true" />

                    <span>
                      <strong>Horario de atención</strong>
                      Lunes a viernes · Horario comercial
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
