'use client';

import { useEffect, useState } from 'react';
import styles from './NarrativeIndicator.module.scss';

const sections = [
  ['inicio', ''],
  ['nosotros', 'NOSOTROS'],
  ['necesidades', 'NECESIDADES'],
  ['soluciones', 'SOLUCIONES'],
  ['metodologia', 'METODOLOGÍA'],
  ['proyectos', 'PORTAFOLIO'],
  ['caso-de-exito', 'CASO DE ÉXITO'],
  ['filosofia', 'FILOSOFÍA'],
  ['fundador', 'MIRADA HUMANA'],
  ['por-que-fenix', 'POR QUÉ FÉNIX'],
  ['contacto', 'CONTACTO'],
  ['footer', 'CIERRE'],
] as const;

export default function NarrativeIndicator() {
  const [activeId, setActiveId] = useState('inicio');

  useEffect(() => {
    const targets = sections
      .map(([id]) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement)
          setActiveId(visible.target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: '-20% 0px -60% 0px' }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    sections.findIndex(([id]) => id === activeId)
  );
  const [label, name] = sections[activeIndex];
  return (
    <span className={styles.indicator} aria-hidden="true">
      <span className={styles.number}>
        {String(activeIndex + 1).padStart(2, '0')} /{' '}
        {String(sections.length).padStart(2, '0')}
      </span>
      <span className={styles.label} key={label}>
        {name}
      </span>
    </span>
  );
}
