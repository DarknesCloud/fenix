import Link from 'next/link';
import { NorthEast } from '@mui/icons-material';
import { Button } from '@mui/material';
import styles from './CTA.module.scss';

export default function CTA() {
  return (
    <section id="contacto" className={`${styles.section} section`}>
      <div className="container">
        <div id="acompanamiento" className={styles.trust}>
          <span className="eyebrow">ACOMPAÑAMIENTO TECNOLÓGICO</span>
          <h3>CONSTRUIR ES SOLO EL COMIENZO.</h3>
          <p>Una solución tecnológica no termina cuando se implementa. Necesita mantenerse, adaptarse y evolucionar junto con la organización.</p>
          <ol className={styles.flow} aria-label="Ciclo de evolución tecnológica">
            <li>Construir</li>
            <li>Mantener</li>
            <li>Adaptar</li>
            <li>Evolucionar</li>
          </ol>
        </div>
        <div className={styles.banner}>
          <span className="eyebrow">INICIEMOS UNA CONVERSACIÓN</span>
          <h2>¿Tienes una necesidad tecnológica?</h2>
          <p>No necesitas tener la solución definida. Empecemos entendiendo el problema.</p>
          <Button component={Link} className={styles.button} href="/contacto" endIcon={<NorthEast />}>HABLEMOS CON FÉNIX</Button>
          <small>Una conversación inicial puede ser el primer paso para construir con más claridad.</small>
        </div>
      </div>
    </section>
  );
}
