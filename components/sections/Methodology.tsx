import Image from 'next/image';
import styles from './Methodology.module.scss';

const stages = [
  {
    number: '01',
    title: 'ENTENDER',
    description: 'Conocemos a fondo tu problema, contexto operativo, procesos y objetivos antes de trazar una sola línea de código.',
    image: '/images/methodology/step-01-entender.webp',
    alt: 'Placeholder esquemático de análisis y mapeo de procesos',
  },
  {
    number: '02',
    title: 'DISEÑAR',
    description: 'Definimos la arquitectura y estrategia técnica que tiene sentido real para tu presupuesto y visión.',
    image: '/images/methodology/step-02-disenar.webp',
    alt: 'Placeholder blueprint de arquitectura de software y wireframing',
  },
  {
    number: '03',
    title: 'CONSTRUIR',
    description: 'Desarrollamos, integramos e implementamos la solución con entregas iterativas y control de calidad.',
    image: '/images/methodology/step-03-construir.webp',
    alt: 'Placeholder gráfico de construcción modular e integración tecnológica',
  },
  {
    number: '04',
    title: 'EVOLUCIONAR',
    description: 'Mantenemos, medimos, adaptamos y acompañamos la plataforma a medida que tu organización crece.',
    image: '/images/methodology/step-04-evolucionar.webp',
    alt: 'Placeholder esquemático de iteración y escalabilidad continua',
  },
] as const;

export default function Methodology() {
  return (
    <section id="metodologia" className={`${styles.methodology} section`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="eyebrow">CÓMO TRABAJAMOS</span>
            <h2>Cómo trabajamos</h2>
          </div>
          <p>Una línea de trabajo clara para avanzar con criterio, colaboración y continuidad.</p>
        </div>

        <div className={styles.rail} aria-label="Etapas de trabajo de Fénix Solutions">
          <svg className={styles.connector} viewBox="0 0 1000 8" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 4H1000" />
          </svg>
          {stages.map(({ number, title, description, image, alt }) => (
            <article className={styles.stage} key={number}>
              <div className={styles.imageFrame}>
                <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <span className={styles.node}><i />{number}</span>
              <div className={styles.stageCopy}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
