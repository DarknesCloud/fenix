'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';

import styles from './Methodology.module.scss';

const stages = [
  {
    number: '01',
    context: 'CONTEXTO',
    title: 'ENTENDER',
    short: 'Definir con precisión qué debe resolverse.',
    description:
      'Levantamos información sobre procesos, usuarios, restricciones, herramientas actuales y objetivos para delimitar el problema y sus prioridades.',
    image: '/images/methodology/step-01-entender.webp',
    alt: 'Esquema conceptual de análisis y mapeo de procesos',
  },
  {
    number: '02',
    context: 'ESTRATEGIA',
    title: 'DISEÑAR',
    short: 'Convertir el diagnóstico en un plan ejecutable.',
    description:
      'Definimos alcance, arquitectura, prioridades, responsabilidades y una ruta de trabajo que permita avanzar con criterios claros.',
    image: '/images/methodology/step-02-disenar.webp',
    alt: 'Esquema conceptual de arquitectura tecnológica y diseño de solución',
  },
  {
    number: '03',
    context: 'IMPLEMENTACIÓN',
    title: 'CONSTRUIR',
    short: 'Implementar, validar y documentar.',
    description:
      'Desarrollamos o implementamos por etapas, validamos el funcionamiento con el contexto real de uso y documentamos lo necesario para operar la solución.',
    image: '/images/methodology/step-03-construir.webp',
    alt: 'Esquema conceptual de construcción e integración tecnológica',
  },
  {
    number: '04',
    context: 'CONTINUIDAD',
    title: 'EVOLUCIONAR',
    short: 'Medir lo que ocurre después de la entrega.',
    description:
      'Revisamos uso, incidencias y cambios en la operación para priorizar ajustes, mantenimiento o nuevas mejoras cuando sean necesarias.',
    image: '/images/methodology/step-04-evolucionar.webp',
    alt: 'Esquema conceptual de evolución y escalabilidad tecnológica',
  },
] as const;

export default function Methodology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeStage = stages[displayIndex];

  const changeStage = (nextIndex: number) => {
    if (nextIndex === activeIndex) return;

    setActiveIndex(nextIndex);
    setIsTransitioning(true);

    if (transitionTimer.current) {
      clearTimeout(transitionTimer.current);
    }

    transitionTimer.current = setTimeout(() => {
      setDisplayIndex(nextIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      });
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (transitionTimer.current) {
        clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (hasAutoPlayed) return;

    const section = document.getElementById('metodologia');
    if (!section) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAutoPlayed) return;

        stages.forEach((_, index) => {
          const timer = setTimeout(() => {
            if (index === 0) {
              setActiveIndex(0);
              setDisplayIndex(0);
              return;
            }

            changeStage(index);

            if (index === stages.length - 1) {
              setHasAutoPlayed(true);
            }
          }, index * 720);

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

            <h2 id="methodology-title">Del problema a una solución operable.</h2>
          </div>

          <p>
            Cada etapa deja una decisión concreta: qué resolver, cómo hacerlo,
            cómo implementarlo y qué observar una vez que está funcionando.
          </p>
        </header>

        <div className={styles.explorer}>
          <div
            className={`${styles.visualPanel} ${
              isTransitioning ? styles.isTransitioning : ''
            }`}
          >
            <div className={styles.imageFrame}>
              <Image
                src={activeStage.image}
                alt={activeStage.alt}
                fill
                priority={displayIndex === 0}
                sizes="(max-width: 768px) 100vw, 65vw"
              />

              <div className={styles.imageOverlay} aria-hidden="true" />

              <div className={styles.visualMeta}>
                <span>ETAPA {activeStage.number} / 04</span>
                <span>PROCESO FÉNIX</span>
              </div>
            </div>
          </div>

          <div
            className={`${styles.stageInfo} ${
              isTransitioning ? styles.isTransitioning : ''
            }`}
          >
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
                      ((displayIndex + 1) / stages.length) * 100
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
                onMouseEnter={() => changeStage(index)}
                onFocus={() => changeStage(index)}
                onClick={() => changeStage(index)}
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
