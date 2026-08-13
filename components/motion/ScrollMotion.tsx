'use client';

import { useEffect } from 'react';

type ScrollDirection = 'up' | 'down';
type MotionState = 'hidden' | 'visible' | 'leaving';

const motionSelector = 'section.section';
const DIRECTION_DEAD_ZONE = 8;

export default function ScrollMotion() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(motionSelector));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!sections.length || prefersReducedMotion.matches) {
      sections.forEach((section) => {
        section.dataset.motionState = 'visible';
      });
      return;
    }

    let lastY = window.scrollY;
    let direction: ScrollDirection = 'down';
    let ticking = false;

    const setDirection = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY;

      if (Math.abs(delta) >= DIRECTION_DEAD_ZONE) {
        direction = delta > 0 ? 'down' : 'up';
        document.documentElement.dataset.scrollDirection = direction;
        lastY = currentY;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(setDirection);
    };

    const setState = (element: HTMLElement, state: MotionState) => {
      element.dataset.motionDirection = direction;
      element.dataset.motionState = state;
    };

    document.documentElement.dataset.scrollDirection = direction;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            setState(element, 'visible');
            return;
          }

          // Solo animamos la salida después de que la sección ya fue visible.
          if (element.dataset.motionState === 'visible') {
            setState(element, 'leaving');
          } else {
            setState(element, 'hidden');
          }
        });
      },
      {
        threshold: [0, 0.08, 0.18],
        rootMargin: '-7% 0px -7% 0px',
      },
    );

    sections.forEach((section) => {
      section.dataset.motionDirection = direction;
      section.dataset.motionState = 'hidden';
      observer.observe(section);
    });

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      delete document.documentElement.dataset.scrollDirection;
    };
  }, []);

  return null;
}
