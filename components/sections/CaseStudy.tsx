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
    image: '/images/work/infraestructura.png',
    alt: 'Instalación de infraestructura de red con gabinete, cableado y equipos de conectividad',
    capabilities: ['Cableado y puntos de red', 'Conectividad', 'Adecuación técnica'],
  },
  {
    id: 'hardware',
    tag: 'SOPORTE TÉCNICO & HARDWARE',
    title: 'Diagnóstico y recuperación de equipos',
    summary:
      'Revisión de fallas de hardware, componentes y alimentación para entender qué está ocurriendo antes de reemplazar equipos o tomar decisiones innecesarias.',
    image: '/images/work/diagnostico.png',
    alt: 'Mesa de diagnóstico técnico con computadora abierta, multímetro y herramientas de reparación',
    capabilities: ['Diagnóstico', 'Mantenimiento', 'Recuperación'],
  },
  {
    id: 'electronics',
    tag: 'ELECTRÓNICA & EQUIPOS ESPECIALIZADOS',
    title: 'Diagnóstico electrónico más allá del equipo convencional',
    summary:
      'Evaluación de tarjetas, alimentación, conexiones y componentes en equipos especializados cuando una falla requiere un análisis técnico más profundo.',
    image: '/images/work/continuidad.png',
    alt: 'Estación de diagnóstico electrónico con equipo especializado abierto, instrumentos de medición y herramientas de precisión',
    capabilities: ['Electrónica', 'Medición', 'Diagnóstico de componentes'],
  },
  {
    id: 'security',
    tag: 'SEGURIDAD & VIDEOVIGILANCIA',
    title: 'Instalaciones de seguridad integradas a la infraestructura',
    summary:
      'Instalación y organización de sistemas de videovigilancia, grabación y conectividad para mantener una solución de seguridad ordenada, accesible y operativa.',
    image: '/images/work/seguridad.png',
    alt: 'Instalación de DVR y equipos de videovigilancia dentro de un gabinete de red',
    capabilities: ['DVR y cámaras', 'Cableado', 'Organización de gabinete'],
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
              equipos, electrónica, seguridad y desarrollo digital.
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
                    sizes="(max-width: 900px) 100vw, 50vw"
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
