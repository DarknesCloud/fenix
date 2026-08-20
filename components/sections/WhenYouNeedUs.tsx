'use client';

import { useState } from 'react';
import styles from './WhenYouNeedUs.module.scss';

const painPoints = [
  {
    title:
      'Las herramientas que utilizas ya no responden bien a tu forma de trabajar.',
    description:
      'Empiezas a depender de hojas de cálculo, procesos paralelos o varias herramientas que resuelven partes del problema, pero ninguna se adapta realmente a tu operación.',
    capabilities:
      'Herramientas limitadas · Información dispersa · Procesos desconectados',
    flow: ['Necesidad', 'Limitación', 'Decisión'],
  },
  {
    title: 'Un proceso cotidiano está consumiendo más tiempo del que debería.',
    description:
      'Tareas repetitivas, registros duplicados, seguimiento manual o información que pasa por demasiadas manos suelen ser señales de que un proceso puede simplificarse.',
    capabilities: 'Tareas repetitivas · Duplicidad · Seguimiento manual',
    flow: ['Proceso', 'Fricción', 'Oportunidad'],
  },
  {
    title: 'Tu presencia digital ya no representa bien a tu empresa.',
    description:
      'El negocio ha cambiado, pero el sitio web quedó atrás, la información ya no refleja lo que haces o tus clientes tienen dificultades para entender tu propuesta.',
    capabilities:
      'Información desactualizada · Imagen inconsistente · Experiencia deficiente',
    flow: ['Realidad', 'Percepción', 'Confianza'],
  },
  {
    title:
      'Mantener la tecnología de tu operación empieza a convertirse en una carga.',
    description:
      'Equipos, redes, cámaras, sistemas y pequeñas incidencias comienzan a exigir tiempo y atención que deberían estar concentrados en las actividades principales de tu empresa.',
    capabilities: 'Incidencias · Mantenimiento · Continuidad operativa',
    flow: ['Tecnología', 'Carga', 'Continuidad'],
  },
] as const;

export default function WhenYouNeedUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePoint = painPoints[activeIndex];

  return (
    <section
      id="necesidades"
      className={`${styles.section} section`}
      aria-labelledby="when-you-need-us-title"
    >
      <div className="container">
        <header className={styles.heading}>
          <span className="eyebrow">
            -- CUÁNDO TIENE SENTIDO REVISAR TU TECNOLOGÍA
          </span>

          <div className={styles.headingGrid}>
            <div>
              <h2 id="when-you-need-us-title">
                Hay momentos en los que la tecnología empieza a quedarse corta.
              </h2>

              <p className={styles.intro}>
                No siempre aparece como un gran problema. A veces comienza con
                una tarea que tarda demasiado, información difícil de encontrar
                o una herramienta que ya no acompaña la forma en que trabajas.
              </p>
            </div>

            <div className={styles.visual} aria-hidden="true">
              <div className={styles.visualLabel}>
                <span>DETECTAR</span>
                <span>LA SEÑAL</span>
              </div>

              <div className={styles.flow}>
                {activePoint.flow.map((step, index) => (
                  <div className={styles.flowStep} key={step}>
                    <span className={styles.flowNode}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className={styles.flowText}>{step}</span>

                    {index < activePoint.flow.length - 1 && (
                      <span className={styles.flowLine} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.list}>
          {painPoints.map((point, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                type="button"
                className={`${styles.item} ${
                  isActive ? styles.itemActive : ''
                }`}
                key={point.title}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className={styles.node}>0{index + 1}</span>

                <span className={styles.itemContent}>
                  <span className={styles.itemHeader}>
                    <span className={styles.itemTitle}>{point.title}</span>

                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </span>

                  <span className={styles.itemDetails}>
                    <span className={styles.description}>
                      {point.description}
                    </span>

                    <span className={styles.capabilities}>
                      {point.capabilities}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className={styles.closing}>
          <blockquote className={styles.quote}>
            <span className={styles.quoteMark} aria-hidden="true">
              “
            </span>

            <span>
              No siempre necesitas más tecnología. A veces necesitas entender
              mejor qué está dificultando tu forma de trabajar.
            </span>
          </blockquote>

          <div className={styles.methodBridge}>
            <span className={styles.bridgeLabel}>
              LAS SEÑALES PEQUEÑAS TAMBIÉN TIENEN UN COSTO.
            </span>

            <div
              className={styles.methodFlow}
              aria-label="Impacto de una fricción tecnológica"
            >
              <span>TIEMPO</span>
              <span className={styles.methodArrow}>→</span>
              <span>FRICCIÓN</span>
              <span className={styles.methodArrow}>→</span>
              <span>COSTO OPERATIVO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
