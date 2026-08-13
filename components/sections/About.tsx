import styles from './About.module.scss';

export default function About() {
  return (
    <section id="nosotros" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.heading}>
            <span className={styles.badge}>QUIÉNES SOMOS</span>
            <h2>Construimos tecnología con <em>propósito.</em></h2>
          </div>
          <div className={styles.editorial}>
            <p>Fénix Solutions es una empresa de tecnología enfocada en desarrollar soluciones a medida y acompañar a las organizaciones en su evolución tecnológica.</p>
            <p>No empezamos por la herramienta. Empezamos por comprender la necesidad real de la organización.</p>
            <p>Analizamos el contexto, identificamos oportunidades y construimos soluciones que puedan crecer junto con la organización.</p>
            <div className={styles.signatureLine}><span /> VISIÓN CONSULTIVA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
