'use client';

import { useState } from 'react';
import styles from './WhenYouNeedUs.module.scss';

const painPoints = [
  {
    title: 'Necesitas desarrollar algo que no existe.',
    description:
      'Diseñamos y desarrollamos software personalizado para resolver necesidades específicas de tu organización.',
    capabilities: 'Software · Plataformas · Automatización · Integraciones',
    flow: ['Necesidad', 'Software', 'Solución'],
  },
  {
    title: 'Quieres transformar un proceso.',
    description:
      'Convertimos procesos manuales o poco eficientes en herramientas digitales que mejoran la operación y permiten crecer.',
    capabilities: 'Digitalización · Automatización · Sistemas internos',
    flow: ['Proceso', 'Digitalización', 'Eficiencia'],
  },
  {
    title: 'Necesitas una presencia digital profesional.',
    description:
      'Creamos experiencias digitales que comunican quién eres, qué haces y a quién sirves.',
    capabilities: 'Sitios web · Plataformas · Hosting · Mantenimiento',
    flow: ['Identidad', 'Experiencia', 'Presencia'],
  },
  {
    title: 'Ya tienes tecnología, pero necesitas acompañamiento.',
    description:
      'Ayudamos a mantener, soportar y evolucionar la tecnología que ya forma parte de tu operación.',
    capabilities: 'Soporte · Mantenimiento · Infraestructura · Asesoría',
    flow: ['Tecnología', 'Soporte', 'Evolución'],
  },
];

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
          <span className="eyebrow">-- ¿CUÁNDO NECESITAS A FÉNIX?</span>

          <div className={styles.headingGrid}>
            <div>
              <h2 id="when-you-need-us-title">
                ¿En qué momento puede ayudarte Fénix?
              </h2>

              <p className={styles.intro}>
                Desde desarrollar una solución que no existe hasta acompañar la
                tecnología que ya forma parte de tu operación.
              </p>
            </div>

            <div className={styles.visual} aria-hidden="true">
              <div className={styles.visualLabel}>
                <span>EL CAMINO</span>
                <span>FÉNIX</span>
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
              mejor que necesitas.
            </span>
          </blockquote>

          <div className={styles.methodBridge}>
            <span className={styles.bridgeLabel}>
              PRIMERO ENTENDEMOS. DESPUÉS CONSTRUIMOS.
            </span>

            <div className={styles.methodFlow} aria-label="Método Fénix">
              <span>ENTENDER</span>
              <span className={styles.methodArrow}>→</span>
              <span>DISEÑAR</span>
              <span className={styles.methodArrow}>→</span>
              <span>CONSTRUIR</span>
              <span className={styles.methodArrow}>→</span>
              <span>EVOLUCIONAR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
