'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

import Image from 'next/image';

import { ArrowForward, East } from '@mui/icons-material';
import { Button } from '@mui/material';

import NarrativeIndicator from '@/components/motion/NarrativeIndicator';

import styles from './Hero.module.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;

    const updateScrollProgress = () => {
      if (!heroRef.current) return;

      const hero = heroRef.current;
      const rect = hero.getBoundingClientRect();
      const heroHeight = hero.offsetHeight;

      if (heroHeight <= 0) return;

      const progress = Math.min(Math.max(-rect.top / heroHeight, 0), 1);

      setScrollProgress(progress);

      animationFrameId = null;
    };

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const heroStyle = {
    '--scroll-progress': scrollProgress,
  } as CSSProperties;

  return (
    <section
      ref={heroRef}
      id="inicio"
      className={styles.hero}
      style={heroStyle}
      aria-labelledby="hero-title"
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className="eyebrow">
              FÉNIX SOLUTIONS — TECNOLOGÍA CON PROPÓSITO
            </span>

            <h1 id="hero-title">
              Tecnología que nace de una necesidad.
              <span>Soluciones que construyen futuro.</span>
            </h1>

            <p>
              Desarrollamos soluciones tecnológicas a la medida de
              organizaciones que buscan resolver problemas reales, mejorar su
              forma de trabajar y crecer con tecnología.
            </p>

            <div
              className={styles.serviceDescriptor}
              aria-label="Capacidades principales de Fénix Solutions"
            >
              Desarrollo de software personalizado
              <span>·</span>
              Soluciones tecnológicas
              <span>·</span>
              Acompañamiento tecnológico
            </div>

            <div className={styles.actions}>
              <Button
                className={styles.primaryAction}
                href="#nosotros"
                endIcon={<ArrowForward />}
                disableRipple
              >
                Conoce Fénix
              </Button>

              <Button
                className={styles.secondaryAction}
                href="#contacto"
                endIcon={<ArrowForward />}
                disableRipple
              >
                Hablemos
              </Button>
            </div>
          </div>

          <div
            className={styles.visual}
            aria-label="Fénix oficial de Fénix Solutions: ala orgánica dorada y ala tecnológica de circuitos"
          >
            <div className={styles.imageHalo} aria-hidden="true" />

            <Image
              className={styles.fenixImage}
              src="/images/hero-fenix.png"
              alt="Fénix compuesto por un ala dorada orgánica y un ala de circuitos tecnológicos azul y dorado"
              width={1254}
              height={1254}
              priority
            />

            <span className={styles.caption} aria-hidden="true">
              EVOLUCIÓN
              <br />
              <b>CON PROPÓSITO</b>
            </span>
          </div>
        </div>

        <div className={styles.footer}>
          <NarrativeIndicator />

          <a href="#nosotros">
            Scroll para explorar
            <East />
          </a>
        </div>
      </div>
    </section>
  );
}
