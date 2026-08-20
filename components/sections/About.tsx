import styles from './About.module.scss';

export default function About() {
  return (
    <section id="nosotros" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.heading}>
            <span className={styles.badge}>QUIÉNES SOMOS</span>

            <h2>
              Construimos tecnología con <em>propósito.</em>
            </h2>
          </div>

          <div className={styles.editorial}>
            <p>
              Fénix Solutions nace para ayudar a empresas y organizaciones a
              resolver necesidades reales a través de la tecnología.
            </p>

            <p>
              Antes de recomendar una herramienta o desarrollar una solución,
              buscamos entender cómo trabajan, qué problema necesitan resolver
              y qué esperan conseguir.
            </p>

            <p>
              A partir de ahí definimos el camino adecuado: puede ser
              desarrollar software, mejorar un proceso, implementar tecnología
              o acompañar de forma continua su operación.
            </p>

            <div className={styles.signatureLine}>
              <span />
              PRIMERO ENTENDER. DESPUÉS CONSTRUIR.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
