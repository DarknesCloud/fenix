'use client';

import { ArrowForward } from '@mui/icons-material';
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
  { id: 'software', label: 'Desarrollo Web & Software' },
  { id: 'infraestructura', label: 'Infraestructura & Redes' },
  { id: 'soporte', label: 'Soporte Técnico & Hardware' },
];

const projects: Project[] = [
  {
    id: 'installation',
    category: 'infraestructura',
    tag: 'INFRAESTRUCTURA & REDES',
    title: 'Instalación e Infraestructura Tecnológica',
    summary: 'Montaje, canalización e instalación de equipamiento de red para optimizar la conectividad operativa.',
    image: '/images/projects/project-installation.webp',
    alt: 'Placeholder documental de una instalación organizada de infraestructura de red',
  },
  {
    id: 'repair',
    category: 'soporte',
    tag: 'SOPORTE TÉCNICO & HARDWARE',
    title: 'Mantenimiento y Optimización de Equipos',
    summary: 'Diagnóstico, reparación y optimización de equipos informáticos críticos para la operación empresarial.',
    image: '/images/projects/project-repair.webp',
    alt: 'Placeholder documental de mantenimiento preventivo de equipo informático',
  },
  {
    id: 'web-platform',
    category: 'software',
    tag: 'DESARROLLO DE SOFTWARE',
    title: 'Plataforma Web Profesional',
    summary: 'Solución digital a la medida para modernizar la presencia e interacción con clientes.',
    image: '/images/projects/project-web.webp',
    alt: 'Placeholder de una plataforma web profesional mostrada en varios dispositivos',
  },
];

export default function CaseStudy() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('todos');

  const visibleProjects = useMemo(
    () => (activeFilter === 'todos' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section id="proyectos" className={`${styles.caseStudy} section`}>
      <div className="container">
        <header className={styles.header}>
          <span className="eyebrow">PORTAFOLIO FÉNIX</span>
          <h2>LO QUE YA HEMOS CONSTRUIDO.</h2>
          <p>Experiencias reales donde la tecnología se convirtió en una solución para una necesidad concreta.</p>
        </header>

        <div
          className={styles.tabList}
          role="group"
          aria-label="Filtrar capacidades demostradas por categoría"
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
            <article className={styles.projectCard} key={project.id} style={{ '--card-index': index } as CSSProperties}>
              <div className={styles.imageFrame}>
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.tag}>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <a href="#contacto" className={styles.projectLink} aria-label={`Conversar sobre ${project.title}`}>
                  Ver solución <ArrowForward aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
