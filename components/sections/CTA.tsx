import Link from 'next/link';
import { NorthEast } from '@mui/icons-material';
import { Button } from '@mui/material';
import styles from './CTA.module.scss';

const lifecycle = ['Construir', 'Mantener', 'Adaptar', 'Evolucionar'] as const;

export default function CTA() {
  return (
    <section
      id="contacto"
      className={`${styles.section} section`}
      aria-labelledby="cta-title"
    >
      <div className="container">
        <div id="acompanamiento" className={styles.trust}>
          <div className={styles.trustCopy}>
            <span className="eyebrow">ACOMPAÑAMIENTO TECNOLÓGICO</span>

            <h3>CONSTRUIR ES SOLO EL COMIENZO.</h3>

            <p>
              Una solución tecnológica no termina cuando se implementa. Necesita
              mantenerse, adaptarse y evolucionar junto con la organización.
            </p>
          </div>

          <div
            className={styles.lifecycle}
            aria-label="Ciclo de evolución tecnológica"
          >
            <div className={styles.lifecycleLine} aria-hidden="true">
              <span />
            </div>

            {lifecycle.map((item, index) => (
              <div className={styles.lifecycleStep} key={item}>
                <span className={styles.lifecycleNode}>0{index + 1}</span>

                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <span className="eyebrow">INICIEMOS UNA CONVERSACIÓN</span>

            <h2 id="cta-title">¿Tienes una necesidad tecnológica?</h2>

            <p>
              No necesitas tener la solución definida. Empecemos entendiendo el
              problema.
            </p>

            <div className={styles.actions}>
              <Button
                component={Link}
                className={styles.button}
                href="/contacto"
                endIcon={<NorthEast />}
              >
                HABLEMOS CON FÉNIX
              </Button>

              <small>
                Una conversación inicial puede ser el primer paso para construir
                con más claridad.
              </small>
            </div>
          </div>

          <div className={styles.signature} aria-hidden="true">
            <span className={styles.signatureLabel}>FÉNIX SOLUTIONS</span>

            <div className={styles.signatureFlow}>
              <span>ENTENDER</span>
              <i />
              <span>CONSTRUIR</span>
              <i />
              <span>EVOLUCIONAR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
