import Image from 'next/image';
import Link from 'next/link';
import { Mail } from '@mui/icons-material';

import styles from './Footer.module.scss';

const links = [
  ['Inicio', '/#inicio'],
  ['Nosotros', '/#nosotros'],
  ['Soluciones', '/#soluciones'],
  ['Caso de Éxito', '/#caso-de-exito'],
  ['Contacto', '/contacto'],
];

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="Fénix Solutions, inicio"
            >
              <Image
                className={styles.logoImage}
                src="/images/fenix-navbar.png"
                alt="Fénix Solutions"
                width={1815}
                height={832}
                sizes="220px"
              />
            </Link>

            <p>
              Desarrollo de software personalizado y soluciones tecnológicas
              para organizaciones.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Navegación del pie de página">
            <span>NAVEGACIÓN</span>

            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>

          <div className={styles.contact}>
            <span>HABLEMOS</span>

            <Link className={styles.contactPlaceholder} href="/contacto">
              <Mail aria-hidden="true" />
              Conoce nuestros canales de contacto.
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} Fénix Solutions. Todos los derechos
            reservados.
          </span>

          <strong>
            Renacer desde el conocimiento. Construir con tecnología. Trascender
            con propósito.
          </strong>
        </div>
      </div>
    </footer>
  );
}
