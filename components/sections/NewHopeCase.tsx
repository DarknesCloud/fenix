import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import styles from './NewHopeCase.module.scss';

const narrative = [
  {
    number: '01',
    phase: 'NECESIDAD',
    label: 'EL RETO',
    text: 'New Hope Opportunities es una fundación educativa en San Pedro Sula que necesitaba fortalecer su presencia digital y contar con una solución web que representara adecuadamente su trabajo.',
  },
  {
    number: '02',
    phase: 'DESARROLLO',
    label: 'LA SOLUCIÓN',
    text: 'Fénix desarrolló su sitio web institucional, creando una presencia digital profesional alineada con la identidad y propósito de la organización.',
  },
  {
    number: '03',
    phase: 'ACOMPAÑAMIENTO',
    label: 'LA EVOLUCIÓN',
    text: 'El proyecto evolucionó más allá del desarrollo web hacia un acompañamiento tecnológico continuo para la operación de la escuela.',
  },
] as const;

export default function NewHopeCase() {
  return (
    <section
      id="caso-de-exito"
      className={`${styles.newHopeCase} section`}
      aria-labelledby="new-hope-title"
    >
      <div className="container">
        <div className={styles.featuredCase}>
          <div className={styles.caseHeader}>
            <span className="eyebrow">CASO DE ÉXITO · 01</span>

            <h2 id="new-hope-title">
              New Hope <em>Opportunities</em>
            </h2>

            <p>
              De una necesidad digital a una relación de acompañamiento
              tecnológico.
            </p>

            <div className={styles.meta}>
              <div>
                <span>CLIENTE</span>
                <strong>Fundación educativa</strong>
              </div>

              <div>
                <span>UBICACIÓN</span>
                <strong>San Pedro Sula</strong>
              </div>

              <div>
                <span>RELACIÓN</span>
                <strong>Desarrollo + acompañamiento</strong>
              </div>
            </div>
          </div>

          <div className={styles.imageFrame}>
            <Image
              src="/images/projects/project-new-hope.webp"
              alt="Placeholder documental de New Hope Opportunities y su plataforma institucional"
              fill
              priority={false}
              sizes="(max-width: 800px) 100vw, 47vw"
            />

            <div className={styles.imageLabel}>
              <span>PROYECTO</span>
              <strong>Presencia digital + acompañamiento</strong>
            </div>
          </div>

          <div className={styles.narrative}>
            <div className={styles.progressLine} aria-hidden="true">
              <span />
            </div>

            {narrative.map((item, index) => {
              const isEvolution = index === narrative.length - 1;

              return (
                <article
                  className={`${styles.narrativeItem} ${
                    isEvolution ? styles.evolution : ''
                  }`}
                  key={item.label}
                >
                  <div className={styles.itemTop}>
                    <span className={styles.itemNumber}>{item.number}</span>
                    <span className={styles.phase}>{item.phase}</span>
                  </div>

                  <h3>{item.label}</h3>

                  <p>{item.text}</p>

                  {isEvolution && (
                    <span className={styles.evolutionNote}>
                      Aquí comienza el acompañamiento.
                    </span>
                  )}
                </article>
              );
            })}
          </div>

          <div className={styles.caseFooter}>
            <div className={styles.footerCopy}>
              <span className={styles.footerLabel}>LO QUE CAMBIÓ</span>

              <p>
                Lo que comenzó como un proyecto digital se convirtió en una
                relación de acompañamiento tecnológico.
              </p>
            </div>

            <a
              href="/contacto"
              className={styles.caseLink}
              aria-label="Conocer el caso completo de New Hope Opportunities"
            >
              Conocer el caso completo
              <ArrowForward aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
