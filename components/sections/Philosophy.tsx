import Image from 'next/image';
import styles from './Philosophy.module.scss';

const pillars = [
  {
    number: '01',
    concept: 'CONOCIMIENTO',
    lead: 'RENACER',
    accent: 'Aprender cambia la forma de decidir.',
    text: 'Cada proyecto deja información, experiencia y criterio que permiten tomar mejores decisiones la próxima vez.',
    image: '/images/philosophy/renacer.webp',
    alt: 'Composición geométrica abstracta que representa comprensión y descubrimiento',
  },
  {
    number: '02',
    concept: 'TECNOLOGÍA',
    lead: 'CONSTRUIR',
    accent: 'El conocimiento debe convertirse en algo útil.',
    text: 'La tecnología tiene valor cuando se traduce en herramientas, procesos y capacidades que funcionan en el trabajo cotidiano.',
    image: '/images/philosophy/construir.webp',
    alt: 'Composición geométrica abstracta de módulos tecnológicos en ensamblaje',
  },
  {
    number: '03',
    concept: 'PROPÓSITO',
    lead: 'TRASCENDER',
    accent: 'Lo construido debe dejar capacidad, no dependencia.',
    text: 'Buscamos que cada intervención deje una operación más clara, más preparada y con mejores bases para lo que venga después.',
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
              Renacer, construir y trascender no son solo palabras de marca.
            </h2>

            <p>
              Representan cómo entendemos el valor que debería dejar la tecnología
              dentro de una empresa u organización.
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
