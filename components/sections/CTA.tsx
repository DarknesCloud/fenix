import Link from 'next/link';
import { NorthEast } from '@mui/icons-material';
import { Button } from '@mui/material';
import styles from './CTA.module.scss';

const lifecycle = [
  'Conversar',
  'Compartir contexto',
  'Acordar alcance',
  'Definir siguiente paso',
] as const;

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
            <span className="eyebrow">PRIMER CONTACTO</span>

            <h3>NO NECESITAS LLEGAR CON UN BRIEF PERFECTO.</h3>

            <p>
              Si puedes explicar qué está pasando, qué quieres mejorar o qué te
              preocupa de tu tecnología actual, ya tenemos un buen punto de
              partida para conversar.
            </p>
          </div>

          <div
            className={styles.lifecycle}
            aria-label="Qué ocurre después del primer contacto"
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

            <h2 id="cta-title">¿Hay algo que quieres resolver?</h2>

            <p>
              Cuéntanos el contexto. Podemos revisar contigo si Fénix es el apoyo
              adecuado y cuál tendría sentido que fuera el siguiente paso.
            </p>

            <div className={styles.actions}>
              <Button
                component={Link}
                className={styles.button}
                href="/contacto"
                endIcon={<NorthEast />}
              >
                CONTACTAR A FÉNIX
              </Button>

              <small>
                La primera conversación sirve para ubicar el problema y decidir
                si tiene sentido avanzar.
              </small>
            </div>
          </div>

          <div className={styles.signature} aria-hidden="true">
            <span className={styles.signatureLabel}>FÉNIX SOLUTIONS</span>

            <div className={styles.signatureFlow}>
              <span>CONVERSAR</span>
              <i />
              <span>ACLARAR</span>
              <i />
              <span>DECIDIR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
