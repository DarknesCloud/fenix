import Image from 'next/image';
import styles from './Philosophy.module.scss';

const pillars = [
  {
    number: '01',
    concept: 'CONOCIMIENTO',
    lead: 'RENACER',
    accent: 'Comprender antes de actuar.',
    text: 'La tecnología comienza con entender el problema.',
    image: '/images/philosophy/renacer.webp',
    alt: 'Composición geométrica abstracta que representa comprensión y descubrimiento',
  },
  {
    number: '02',
    concept: 'TECNOLOGÍA',
    lead: 'CONSTRUIR',
    accent: 'Convertir conocimiento en soluciones.',
    text: 'Desarrollo preciso basado en la realidad de la empresa.',
    image: '/images/philosophy/construir.webp',
    alt: 'Composición geométrica abstracta de módulos tecnológicos en ensamblaje',
  },
  {
    number: '03',
    concept: 'PROPÓSITO',
    lead: 'TRASCENDER',
    accent: 'Crear valor que permanece.',
    text: 'Soluciones que evolucionan y generan impacto de largo plazo.',
    image: '/images/philosophy/trascender.webp',
    alt: 'Composición geométrica abstracta de expansión y proyección hacia el futuro',
  },
] as const;

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className={`${styles.philosophy} section`}
      aria-labelledby="philosophy-title"
    >
      <div className="container">
        <header className={styles.header}>
          <span className={styles.label}>-- NUESTRA FILOSOFÍA</span>

          <div className={styles.heading}>
            <h2 id="philosophy-title">
              Hay una idea detrás de todo lo que construimos.
            </h2>

            <p>
              Una forma de trabajar que parte de comprender antes de construir
              soluciones que puedan permanecer.
            </p>
          </div>
        </header>

        <div className={styles.philosophyFlow}>
          <div className={styles.connectionLine} aria-hidden="true">
            <span />
          </div>

          {pillars.map((pillar, index) => (
            <article className={styles.pillar} key={pillar.lead}>
              <div className={styles.visual}>
                <div className={styles.imageFrame}>
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />

                  <div className={styles.imageMeta}>
                    <span>{pillar.number}</span>
                    <span>{pillar.concept}</span>
                  </div>
                </div>
              </div>

              <div className={styles.nodeWrap} aria-hidden="true">
                <span className={styles.node}>{pillar.number}</span>
              </div>

              <div className={styles.content}>
                <span className={styles.concept}>{pillar.concept}</span>

                <h3>{pillar.lead}</h3>

                <strong>{pillar.accent}</strong>

                <p>{pillar.text}</p>
              </div>

              {index < pillars.length - 1 && (
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              )}
            </article>
          ))}
        </div>

        <div className={styles.manifesto}>
          <span>CONOCIMIENTO</span>
          <i>→</i>
          <span>TECNOLOGÍA</span>
          <i>→</i>
          <span>PROPÓSITO</span>
        </div>
      </div>
    </section>
  );
}
