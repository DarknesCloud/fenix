'use client';

import Image from 'next/image';
import { useMemo, useState, type CSSProperties } from 'react';
import styles from './CaseStudy.module.scss';

type ProjectCategory = 'software' | 'infraestructura' | 'soporte';
type FilterId = 'todos' | ProjectCategory;

type Project = {
  id: string;
  category: ProjectCategory;
  tag: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
};

const filters: Array<{ id: FilterId; label: string }> = [
  { id: 'todos', label: 'Todos' },
  { id: 'software', label: 'Desarrollo digital' },
  { id: 'infraestructura', label: 'Infraestructura' },
  { id: 'soporte', label: 'Soporte técnico' },
];

const projects: Project[] = [
  {
    id: 'installation',
    category: 'infraestructura',
    tag: 'INFRAESTRUCTURA & REDES',
    title: 'Infraestructura para una operación conectada',
    summary:
      'Instalación, organización y adecuación de infraestructura tecnológica para mantener equipos y conectividad listos para el trabajo diario.',
    image: '/images/projects/project-installation.webp',
    alt: 'Trabajo de instalación y organización de infraestructura tecnológica',
  },
  {
    id: 'repair',
    category: 'soporte',
    tag: 'SOPORTE TÉCNICO & HARDWARE',
    title: 'Diagnóstico y recuperación de equipos',
    summary:
      'Revisión, mantenimiento y reparación de equipos cuando una falla comienza a afectar la continuidad de la operación.',
    image: '/images/projects/project-repair.webp',
    alt: 'Trabajo de diagnóstico y mantenimiento de equipo informático',
  },
  {
    id: 'web-platform',
    category: 'software',
    tag: 'DESARROLLO DIGITAL',
    title: 'Experiencias web construidas a medida',
    summary:
      'Diseño y desarrollo de sitios y experiencias digitales adaptadas a la identidad, objetivos y forma de comunicarse de cada proyecto.',
    image: '/images/projects/project-web.webp',
    alt: 'Proyecto de desarrollo de una experiencia web profesional',
  },
];

export default function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('todos');

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'todos'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="proyectos" className={`${styles.caseStudy} section`} aria-labelledby="projects-title">
      <div className="container">
        <header className={styles.header}>
          <span className="eyebrow">TECNOLOGÍA EN LA PRÁCTICA</span>
          <h2 id="projects-title">DISTINTAS NECESIDADES. <em>EL MISMO COMPROMISO.</em></h2>
          <p>
            Además del desarrollo de proyectos completos, trabajamos sobre necesidades concretas que forman parte del día a día tecnológico de una organización.
          </p>
        </header>

        <div
          className={styles.tabList}
          role="group"
          aria-label="Filtrar trabajos por tipo de capacidad"
        >
          {filters.map((filter) => (
            <button
              className={activeFilter === filter.id ? styles.tabActive : styles.tab}
              type="button"
              aria-pressed={activeFilter === filter.id}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          className={styles.projectGrid}
          key={activeFilter}
          aria-live="polite"
          aria-atomic="true"
        >
          {visibleProjects.map((project, index) => (
            <article
              className={styles.projectCard}
              key={project.id}
              style={{ '--card-index': index } as CSSProperties}
            >
              <div className={styles.imageFrame}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 50vw"
                />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.tag}>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
