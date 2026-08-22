import { ArrowForward, OpenInNew } from '@mui/icons-material';
import styles from './NewHopeCase.module.scss';
import previewStyles from './NewHopePreview.module.scss';

const newHopeUrl = 'https://nhohonduras.org';
const newHopeBaseUrl = newHopeUrl.replace(/\/$/, '');

const narrative = [
  {
    number: '01',
    phase: 'NECESIDAD',
    label: 'EL PUNTO DE PARTIDA',
    text: 'New Hope Opportunities necesitaba una presencia web institucional que comunicara con claridad su trabajo educativo y ofreciera una base digital más profesional para la organización.',
  },
  {
    number: '02',
    phase: 'DESARROLLO',
    label: 'LA IMPLEMENTACIÓN',
    text: 'Diseñamos y desarrollamos su sitio web institucional, organizando el contenido, la experiencia de navegación y la presentación de la organización alrededor de sus necesidades reales.',
  },
  {
    number: '03',
    phase: 'CONTINUIDAD',
    label: 'LO QUE VINO DESPUÉS',
    text: 'La relación continuó después de publicar el sitio. Hoy Fénix mantiene un vínculo de soporte y acompañamiento tecnológico con New Hope para atender nuevas necesidades de su operación.',
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
            <span className="eyebrow">CASO REAL · 01</span>

            <h2 id="new-hope-title">
              New Hope <em>Opportunities</em>
            </h2>

            <p>
              Un proyecto web que abrió la puerta a una relación tecnológica más
              cercana y continua.
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
                <span>ALCANCE</span>
                <strong>Web institucional + acompañamiento</strong>
              </div>
            </div>
          </div>

          <div className={`${styles.imageFrame} ${previewStyles.livePreview}`}>
            <div className={previewStyles.browserBar} aria-hidden="true">
              <span className={previewStyles.browserDots}>
                <i />
                <i />
                <i />
              </span>
              <span className={previewStyles.browserAddress}>nhohonduras.org</span>
            </div>

            <div className={previewStyles.previewViewport}>
              <iframe
                src={newHopeUrl}
                title="Vista previa del sitio web de New Hope Opportunities desarrollado por Fénix Solutions"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                tabIndex={-1}
              />
            </div>

            <div className={`${styles.imageLabel} ${previewStyles.previewLabel}`}>
              <div>
                <span>PROYECTO REAL · VISTA EN VIVO</span>
                <strong>Sitio web institucional de New Hope Opportunities</strong>
              </div>

              <a
                href={newHopeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={previewStyles.previewLink}
              >
                Ver sitio
                <OpenInNew aria-hidden="true" />
              </a>
            </div>
          </div>

          <div
            className={styles.contextGallery}
            aria-label="Fotografías reales de New Hope Opportunities"
          >
            <div className={styles.contextIntro}>
              <span>EL CONTEXTO REAL</span>
              <p>
                Estas imágenes forman parte del material institucional que New Hope
                utiliza para contar su trabajo. Las incorporamos aquí para conectar el
                producto digital con la realidad que representa.
              </p>
            </div>

            <figure className={`${styles.contextPhoto} ${styles.contextPhotoPrimary}`}>
              <img
                src={`${newHopeBaseUrl}/assets/education-early.webp`}
                alt="Escena educativa de New Hope Opportunities"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>ENTORNO EDUCATIVO</span>
                <strong>La organización detrás del proyecto.</strong>
              </figcaption>
            </figure>

            <div className={styles.contextStack}>
              <figure className={styles.contextPhoto}>
                <img
                  src={`${newHopeBaseUrl}/assets/chicos.jpg`}
                  alt="Estudiantes participando en actividades de New Hope Opportunities"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>COMUNIDAD</span>
                  <strong>Personas y experiencias reales.</strong>
                </figcaption>
              </figure>

              <figure className={styles.contextPhoto}>
                <img
                  src={`${newHopeBaseUrl}/assets/education-secondary.jpg`}
                  alt="Actividad educativa de New Hope Opportunities"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <span>EDUCACIÓN</span>
                  <strong>El trabajo que la web debía representar.</strong>
                </figcaption>
              </figure>
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
                  className={`${styles.narrativeItem} ${isEvolution ? styles.evolution : ''}`}
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
                      El proyecto no terminó con la entrega.
                    </span>
                  )}
                </article>
              );
            })}
          </div>

          <div className={styles.caseFooter}>
            <div className={styles.footerCopy}>
              <span className={styles.footerLabel}>POR QUÉ IMPORTA</span>

              <p>
                Este caso representa la forma en que queremos trabajar: resolver una
                necesidad concreta y conservar el contexto para poder acompañar lo que
                venga después.
              </p>
            </div>

            <a
              href="/contacto"
              className={styles.caseLink}
              aria-label="Conversar con Fénix Solutions sobre un proyecto similar"
            >
              Conversemos sobre tu necesidad
              <ArrowForward aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
