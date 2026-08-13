import Image from 'next/image';
import styles from './Philosophy.module.scss';

const pillars = [
  {
    lead: 'RENACER',
    connector: '—',
    accent: 'Comprender antes de actuar.',
    text: 'La tecnología comienza con entender el problema.',
    image: '/images/philosophy/renacer.webp',
    alt: 'Composición geométrica abstracta que representa comprensión y descubrimiento',
  },
  {
    lead: 'CONSTRUIR',
    connector: '—',
    accent: 'Convertir conocimiento en soluciones.',
    text: 'Desarrollo preciso basado en la realidad de la empresa.',
    image: '/images/philosophy/construir.webp',
    alt: 'Composición geométrica abstracta de módulos tecnológicos en ensamblaje',
  },
  {
    lead: 'TRASCENDER',
    connector: '—',
    accent: 'Crear valor que permanece.',
    text: 'Soluciones que evolucionan y generan impacto de largo plazo.',
    image: '/images/philosophy/trascender.webp',
    alt: 'Composición geométrica abstracta de expansión y proyección hacia el futuro',
  },
];

export default function Philosophy() {
  return (
    <section id="filosofia" className={`${styles.philosophy} section`}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.label}>-- NUESTRA FILOSOFÍA</span>
          <div className={styles.heading}>
            <h2>Hay una idea detrás de todo lo que construimos.</h2>
            <p>Una forma de trabajar que parte de comprender antes de construir soluciones que puedan permanecer.</p>
          </div>
        </header>

        <div className={styles.cardGrid}>
          {pillars.map((pillar) => (
            <article className={styles.pillarCard} key={pillar.lead}>
              <div className={styles.imageFrame}>
                <Image src={pillar.image} alt={pillar.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1060px) 50vw, 33vw" />
              </div>
              <div className={styles.cardContent}>
                <h3>
                  <strong>{pillar.lead}</strong>
                  <span>{pillar.connector}</span>
                  <em>{pillar.accent}</em>
                </h3>
                <p>{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
