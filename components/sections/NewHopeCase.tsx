import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import styles from './NewHopeCase.module.scss';

const narrative = [
  {
    label: 'EL RETO',
    text: 'New Hope Opportunities es una fundación educativa en San Pedro Sula que necesitaba fortalecer su presencia digital y contar con una solución web que representara adecuadamente su trabajo.',
  },
  {
    label: 'LA SOLUCIÓN',
    text: 'Fénix desarrolló su sitio web institucional, creando una presencia digital profesional alineada con la identidad y propósito de la organización.',
  },
  {
    label: 'LA EVOLUCIÓN',
    text: 'El proyecto evolucionó más allá del desarrollo web hacia un acompañamiento tecnológico continuo para la operación de la escuela.',
  },
];

export default function NewHopeCase() {
  return (
    <section id="caso-de-exito" className={`${styles.newHopeCase} section`}>
      <div className="container">
        <div className={styles.featuredCase}>
          <div className={styles.caseHeader}>
            <span className="eyebrow">CASO DE ÉXITO · 01</span>
            <h2>New Hope <em>Opportunities</em></h2>
            <p>De una necesidad digital a una relación de acompañamiento tecnológico.</p>
          </div>

          <div className={styles.imageFrame}>
            <Image
              src="/images/projects/project-new-hope.webp"
              alt="Placeholder documental de New Hope Opportunities y su plataforma institucional"
              fill
              priority={false}
              sizes="(max-width: 800px) 100vw, 47vw"
            />
          </div>

          <div className={styles.narrative}>
            {narrative.map((item, index) => (
              <article className={styles.narrativeItem} key={item.label}>
                <span className={styles.itemNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.caseFooter}>
            <p>Lo que comenzó como un proyecto digital se convirtió en una relación de acompañamiento tecnológico.</p>
            <a href="/contacto" className={styles.caseLink} aria-label="Conocer el caso completo de New Hope Opportunities">
              Conocer el caso completo <ArrowForward aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
