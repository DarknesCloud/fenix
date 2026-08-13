import styles from './WhenYouNeedUs.module.scss';

const painPoints = [
  'Necesitas desarrollar algo que no existe.',
  'Quieres digitalizar un proceso.',
  'Necesitas una presencia digital profesional.',
  'Tienes tecnología, pero necesitas acompañamiento para mantenerla y evolucionarla.',
];

export default function WhenYouNeedUs() {
  return (
    <section id="necesidades" className={`${styles.section} section`}>
      <div className="container">
        <header className={styles.heading}>
          <span className="eyebrow">-- ¿CUÁNDO NECESITAS A FÉNIX?</span>
          <div className={styles.headingGrid}>
            <h2>Hay necesidades que la tecnología puede resolver.</h2>
            <p>Identificamos dónde se puede generar eficiencia, control, continuidad y crecimiento en tu operación.</p>
          </div>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.list}>
          {painPoints.map((point, index) => (
            <div className={styles.item} key={point}>
              <span className={styles.node}>0{index + 1}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>

        <blockquote className={styles.quote}>No siempre necesitas más tecnología. A veces necesitas entender mejor cuál tecnología necesitas.</blockquote>
      </div>
    </section>
  );
}
