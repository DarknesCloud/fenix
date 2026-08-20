import Link from 'next/link';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main id="main-content" className={styles.page} tabIndex={-1}>
        <section className={styles.content} aria-labelledby="not-found-title">
          <div className="container">
            <span className={styles.code}>404</span>
            <span className={styles.eyebrow}>PÁGINA NO ENCONTRADA</span>

            <h1 id="not-found-title">Esta ruta no forma parte de Fénix.</h1>

            <p>
              La dirección que intentaste abrir no existe o pudo haber cambiado.
              Puedes volver al inicio y continuar desde allí.
            </p>

            <Link href="/" className={styles.action}>
              Volver al inicio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
