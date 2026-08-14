'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import styles from './Methodology.module.scss';

const stages = [
  {
    number: '01',
    context: 'CONTEXTO',
    title: 'ENTENDER',
    short: 'Comprender antes de proponer.',
    description:
      'Comprendemos tu problema, contexto, procesos y objetivos antes de proponer una solución.',
    image: '/images/methodology/step-01-entender.webp',
    alt: 'Esquema conceptual de análisis y mapeo de procesos',
  },
  {
    number: '02',
    context: 'ESTRATEGIA',
    title: 'DISEÑAR',
    short: 'Definir el camino adecuado.',
    description:
      'Definimos la arquitectura y estrategia tecnológica adecuada para tu realidad y objetivos.',
    image: '/images/methodology/step-02-disenar.webp',
    alt: 'Esquema conceptual de arquitectura tecnológica y diseño de solución',
  },
  {
    number: '03',
    context: 'IMPLEMENTACIÓN',
    title: 'CONSTRUIR',
    short: 'Convertir la estrategia en realidad.',
    description:
      'Desarrollamos, integramos e implementamos la solución de forma iterativa y controlada.',
    image: '/images/methodology/step-03-construir.webp',
    alt: 'Esquema conceptual de construcción e integración tecnológica',
  },
  {
    number: '04',
    context: 'CONTINUIDAD',
    title: 'EVOLUCIONAR',
    short: 'Acompañar lo que viene después.',
    description:
      'Mantenemos, medimos y adaptamos la tecnología a medida que tu organización cambia y crece.',
    image: '/images/methodology/step-04-evolucionar.webp',
    alt: 'Esquema conceptual de evolución y escalabilidad tecnológica',
  },
] as const;

export default function Methodology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  const activeStage = stages[activeIndex];

  useEffect(() => {
    if (hasAutoPlayed) return;

    const section = document.getElementById('metodologia');
    if (!section) return;

    let timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAutoPlayed) return;

        stages.forEach((_, index) => {
          const timer = setTimeout(() => {
            setActiveIndex(index);

            if (index === stages.length - 1) {
              setHasAutoPlayed(true);
            }
          }, index * 520);

          timers.push(timer);
        });

        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [hasAutoPlayed]);

  return (
    <section
      id="metodologia"
      className={`${styles.methodology} section`}
      aria-labelledby="methodology-title"
    >
      <div className="container">
        <header className={styles.header}>
          <div>
            <span className="eyebrow">CÓMO TRABAJAMOS</span>

            <h2 id="methodology-title">Cómo trabajamos</h2>
          </div>

          <p>
            Una necesidad no se convierte en una solución de inmediato. Primero
            la comprendemos, después diseñamos, construimos y acompañamos su
            evolución.
          </p>
        </header>

        <div className={styles.explorer}>
          <div
            className={styles.visualPanel}
            key={`visual-${activeStage.number}`}
          >
            <div className={styles.imageFrame}>
              <Image
                src={activeStage.image}
                alt={activeStage.alt}
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 768px) 100vw, 65vw"
              />

              <div className={styles.imageOverlay} aria-hidden="true" />

              <div className={styles.visualMeta}>
                <span>ETAPA {activeStage.number} / 04</span>

                <span>PROCESO FÉNIX</span>
              </div>
            </div>
          </div>

          <div className={styles.stageInfo} key={`info-${activeStage.number}`}>
            <div className={styles.infoTop}>
              <span className={styles.bigNumber}>{activeStage.number}</span>

              <span className={styles.context}>{activeStage.context}</span>
            </div>

            <h3>{activeStage.title}</h3>

            <strong className={styles.short}>{activeStage.short}</strong>

            <p>{activeStage.description}</p>

            <div className={styles.stagePosition}>
              <span
                style={
                  {
                    '--progress': `${
                      ((activeIndex + 1) / stages.length) * 100
                    }%`,
                  } as CSSProperties
                }
              />
            </div>
          </div>
        </div>

        <div
          className={styles.timeline}
          aria-label="Etapas del proceso de trabajo de Fénix Solutions"
        >
          <div className={styles.timelineTrack} aria-hidden="true">
            <span
              className={styles.timelineProgress}
              style={
                {
                  '--timeline-progress': `${
                    (activeIndex / (stages.length - 1)) * 100
                  }%`,
                } as CSSProperties
              }
            />
          </div>

          {stages.map((stage, index) => {
            const isActive = index === activeIndex;
            const isCompleted = index <= activeIndex;

            return (
              <button
                type="button"
                key={stage.number}
                className={`${styles.timelineStage} ${
                  isActive ? styles.active : ''
                } ${isCompleted ? styles.completed : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
              >
                <span className={styles.timelineNode}>{stage.number}</span>

                <span className={styles.timelineCopy}>
                  <span className={styles.timelineContext}>
                    {stage.context}
                  </span>

                  <strong>{stage.title}</strong>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
