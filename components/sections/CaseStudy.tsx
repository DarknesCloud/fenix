import Image from 'next/image';
import { OpenInNew } from '@mui/icons-material';
import styles from './CaseStudy.module.scss';

const technicalWork = [
  {
    id: 'infrastructure',
    tag: 'INFRAESTRUCTURA & REDES',
    title: 'Infraestructura para una operación conectada',
    summary:
      'Instalación, organización y adecuación de infraestructura tecnológica para mantener conectividad, equipos y puntos de trabajo listos para la operación diaria.',
    image: '/images/projects/project-installation.webp',
    alt: 'Trabajo de instalación y organización de infraestructura tecnológica',
    capabilities: ['Cableado y puntos de red', 'Conectividad', 'Adecuación técnica'],
  },
  {
    id: 'hardware',
    tag: 'SOPORTE TÉCNICO & HARDWARE',
    title: 'Diagnóstico y recuperación de equipos',
    summary:
      'Revisión de fallas de hardware, componentes y alimentación para determinar qué está ocurriendo antes de reemplazar equipos o tomar decisiones innecesarias.',
    image: '/images/projects/project-repair.webp',
    alt: 'Trabajo de diagnóstico y mantenimiento de equipo informático',
    capabilities: ['Diagnóstico', 'Mantenimiento', 'Recuperación'],
  },
  {
    id: 'continuity',
    tag: 'ENERGÍA & CONTINUIDAD',
    title: 'Continuidad y respaldo para equipos críticos',
    summary:
      'Pruebas, mantenimiento y revisión de sistemas de respaldo eléctrico para reducir interrupciones y proteger los equipos que sostienen la operación.',
    image: '/images/projects/project-installation.webp',
    alt: 'Trabajo técnico relacionado con infraestructura y continuidad operativa',
    capabilities: ['UPS y baterías', 'Pruebas eléctricas', 'Continuidad'],
  },
];

const cefiseUrl = 'https://cefise.vercel.app';

export default function CaseStudy() {
  return (
    <section
      id="proyectos"
      className={`${styles.caseStudy} section`}
      aria-labelledby="projects-title"
    >
      <div className="container">
        <header className={styles.header}>
          <span className="eyebrow">TECNOLOGÍA EN LA PRÁCTICA</span>

          <div className={styles.headerGrid}>
            <h2 id="projects-title">
              Distintas necesidades. <em>El mismo compromiso.</em>
            </h2>

            <p>
              No todo reto tecnológico necesita convertirse en un gran proyecto.
              También trabajamos sobre necesidades concretas de infraestructura,
              equipos, continuidad y desarrollo digital.
            </p>
          </div>
        </header>

        <div className={styles.workGrid}>
          {technicalWork.map((work, index) => (
            <article className={styles.workCard} key={work.id}>
              <div className={styles.visualStack}>
                <div className={styles.mainVisual}>
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>

                <div className={styles.visualStrip} aria-hidden="true">
                  <div className={styles.miniVisual}>
                    <Image src={work.image} alt="" fill sizes="180px" />
                  </div>
                  <div className={`${styles.miniVisual} ${styles.miniOffset}`}>
                    <Image src={work.image} alt="" fill sizes="180px" />
                  </div>
                  <div className={`${styles.miniVisual} ${styles.miniClose}`}>
                    <Image src={work.image} alt="" fill sizes="180px" />
                  </div>
                </div>

                <span className={styles.visualIndex}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className={styles.workBody}>
                <span className={styles.tag}>{work.tag}</span>
                <h3>{work.title}</h3>
                <p>{work.summary}</p>

                <div className={styles.capabilities}>
                  {work.capabilities.map((capability) => (
                    <span key={capability}>{capability}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className={styles.digitalFeature}>
          <div className={styles.digitalCopy}>
            <span className={styles.digitalEyebrow}>PROYECTO DIGITAL</span>
            <h3>CEFISE</h3>
            <strong>Una experiencia clínica construida con identidad propia.</strong>
            <p>
              Diseño y desarrollo de una experiencia web institucional orientada
              a comunicar tratamientos, metodología y confianza con una presencia
              digital clara, responsive y coherente con la identidad de la clínica.
            </p>

            <div className={styles.digitalMeta}>
              <span>Next.js + TypeScript</span>
              <span>Diseño responsive</span>
              <span>SEO técnico</span>
              <span>Identidad editorial</span>
            </div>

            <a
              className={styles.liveLink}
              href={cefiseUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver sitio en vivo
              <OpenInNew aria-hidden="true" />
            </a>
          </div>

          <div className={styles.browserShell}>
            <div className={styles.browserBar} aria-hidden="true">
              <span />
              <span />
              <span />
              <div className={styles.browserAddress}>cefise.vercel.app</div>
            </div>

            <div className={styles.previewViewport}>
              <iframe
                src={cefiseUrl}
                title="Vista previa del sitio web de CEFISE"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
