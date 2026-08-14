'use client';

import { useState } from 'react';
import {
  ArrowForward,
  AutoGraph,
  Code,
  Handshake,
  Language,
} from '@mui/icons-material';

import styles from './Services.module.scss';

const capabilities = [
  {
    number: '01',
    title: 'Desarrollo de Software Personalizado',
    subtitle: 'NUESTRA CAPACIDAD PRINCIPAL',
    action: 'CONSTRUIMOS',
    description:
      'Diseñamos y desarrollamos plataformas, sistemas y herramientas digitales adaptadas a la operación y objetivos de cada organización.',
    capabilities:
      'Plataformas web · Sistemas internos · Automatización · Aplicaciones a medida',
    icon: Code,
  },
  {
    number: '02',
    title: 'Soluciones Tecnológicas',
    subtitle: 'IMPLEMENTAMOS',
    action: 'IMPLEMENTAMOS',
    description:
      'Implementamos infraestructura, redes e integraciones para responder a desafíos operativos específicos.',
    capabilities: 'Infraestructura · Redes · Integraciones · Seguridad',
    icon: AutoGraph,
  },
  {
    number: '03',
    title: 'Presencia Digital',
    subtitle: 'IDENTIDAD & EXPERIENCIA DIGITAL',
    action: 'CONECTAMOS',
    description:
      'Creamos experiencias digitales que permiten comunicar quién eres, qué haces y a quiénes sirves.',
    capabilities: 'Sitios web · Plataformas digitales · Hosting · Optimización',
    icon: Language,
  },
  {
    number: '04',
    title: 'Acompañamiento Tecnológico',
    subtitle: 'MANTENEMOS Y EVOLUCIONAMOS',
    action: 'ACOMPAÑAMOS',
    description:
      'Mantenemos, soportamos y evolucionamos la tecnología existente para que acompañe el crecimiento de tu organización.',
    capabilities: 'Soporte · Mantenimiento · Sistemas · Asesoría tecnológica',
    icon: Handshake,
  },
] as const;

function CircuitMotif() {
  return (
    <svg
      className={styles.circuitMotif}
      viewBox="0 0 300 180"
      aria-hidden="true"
    >
      <path d="M18 138H96V92H164V40H268" />
      <path d="M42 164H132V122H204V84H284" />
      <path d="M72 16V58H120V108H176V148H246" />

      <circle cx="96" cy="138" r="4" />
      <circle cx="164" cy="92" r="4" />
      <circle cx="204" cy="122" r="4" />
      <circle cx="120" cy="58" r="4" />
      <circle cx="176" cy="108" r="4" />
      <circle cx="268" cy="40" r="5" />
    </svg>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCapability = capabilities[activeIndex];
  const ActiveIcon = activeCapability.icon;

  return (
    <section
      id="soluciones"
      className={`${styles.services} section`}
      aria-labelledby="services-title"
    >
      <div className="container">
        <header className={styles.header}>
          <div>
            <span className="eyebrow">CAPACIDADES TECNOLÓGICAS</span>

            <h2 id="services-title">Tecnología para necesidades reales.</h2>
          </div>

          <p>
            Desde construir software hasta implementar, mantener y evolucionar
            tecnología, nuestras capacidades parten siempre de una necesidad
            concreta.
          </p>
        </header>

        <div className={styles.layout} onMouseLeave={() => setActiveIndex(0)}>
          {/* PANEL PRINCIPAL DINÁMICO */}
          <article
            className={styles.featured}
            onMouseEnter={() => setActiveIndex(0)}
          >
            <CircuitMotif />

            <div
              key={activeCapability.number}
              className={styles.featureContent}
            >
              <div className={styles.featureTop}>
                <div className={styles.featureCounter}>
                  <span className={styles.featureNumber}>
                    {activeCapability.number}
                  </span>

                  <span className={styles.featureTotal}>/ 04</span>
                </div>

                <div className={styles.featureIcon}>
                  <ActiveIcon />
                </div>
              </div>

              <div className={styles.featureBody}>
                <span className={styles.featureAction}>
                  {activeCapability.action}
                </span>

                <span className={styles.tag}>{activeCapability.subtitle}</span>

                <h3>{activeCapability.title}</h3>

                <p>{activeCapability.description}</p>

                <span className={styles.featureCapabilities}>
                  {activeCapability.capabilities}
                </span>
              </div>
            </div>

            <a href="#contacto" className={styles.featureLink}>
              Hablemos de tu necesidad
              <ArrowForward />
            </a>
          </article>

          {/* NAVEGACIÓN EDITORIAL */}
          <div
            className={styles.complementary}
            aria-label="Explorar capacidades tecnológicas"
          >
            <div className={styles.listHeading}>
              <span>CAPACIDADES</span>
              <span>02 — 04</span>
            </div>

            {capabilities.slice(1).map((capability, index) => {
              const realIndex = index + 1;
              const Icon = capability.icon;
              const isActive = activeIndex === realIndex;

              return (
                <button
                  type="button"
                  className={`${styles.item} ${
                    isActive ? styles.itemActive : ''
                  }`}
                  key={capability.title}
                  onMouseEnter={() => setActiveIndex(realIndex)}
                  onFocus={() => setActiveIndex(realIndex)}
                  aria-pressed={isActive}
                >
                  <span className={styles.number}>{capability.number}</span>

                  <span className={styles.itemIcon}>
                    <Icon />
                  </span>

                  <span className={styles.itemCopy}>
                    <span className={styles.itemTag}>
                      {capability.subtitle}
                    </span>

                    <span className={styles.itemTitle}>{capability.title}</span>

                    <span className={styles.itemDescription}>
                      {capability.description}
                    </span>

                    <span className={styles.capabilities}>
                      {capability.capabilities}
                    </span>
                  </span>

                  <ArrowForward className={styles.arrow} />
                </button>
              );
            })}
          </div>
        </div>

        <aside className={styles.closing}>
          <div>
            <span className="eyebrow">ENTENDER PRIMERO. PROPONER DESPUÉS.</span>

            <h3>¿Y si tu necesidad no aparece aquí?</h3>
          </div>

          <div>
            <p>
              Las categorías organizan nuestras capacidades, pero no limitan las
              soluciones que podemos construir. Si tienes un problema
              tecnológico, podemos empezar por entenderlo contigo.
            </p>

            <a href="#contacto" className={styles.closingLink}>
              Empecemos por entenderla
              <ArrowForward />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
