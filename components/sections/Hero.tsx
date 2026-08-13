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

    window.addEventListener('scroll', handleScroll, { passive: true });

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

  const buttonTransition =
    'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), ' +
    'background 450ms cubic-bezier(0.22, 1, 0.36, 1), ' +
    'border-color 450ms cubic-bezier(0.22, 1, 0.36, 1), ' +
    'color 450ms cubic-bezier(0.22, 1, 0.36, 1), ' +
    'box-shadow 450ms cubic-bezier(0.22, 1, 0.36, 1)';

  const iconTransition = 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <section
      ref={heroRef}
      id="inicio"
      className={styles.hero}
      style={heroStyle}
    >
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className="eyebrow">
              FÉNIX SOLUTIONS — TECNOLOGÍA CON PROPÓSITO
            </span>

            <h1>
              Tecnología que nace de una necesidad.{' '}
              <span>Soluciones que construyen futuro.</span>
            </h1>

            <p>
              Desarrollamos soluciones tecnológicas a la medida de
              organizaciones que buscan resolver problemas reales, mejorar su
              forma de trabajar y crecer con tecnología.
            </p>

            <div
              className={styles.serviceDescriptor}
              aria-label="Servicios de Fénix Solutions"
            >
              Desarrollo de software personalizado
              <span>·</span>
              Soluciones digitales
              <span>·</span>
              Acompañamiento tecnológico
            </div>

            <div className={styles.actions}>
              <Button
                href="#nosotros"
                endIcon={<ArrowForward />}
                disableRipple
                sx={{
                  borderRadius: '8px',

                  color: '#111827',

                  background:
                    'linear-gradient(135deg, #f7d774 0%, #d6a63a 100%)',

                  boxShadow: '0 4px 20px rgba(214, 166, 58, 0.22)',

                  transition: buttonTransition,

                  '& .MuiButton-endIcon': {
                    transition: iconTransition,
                  },

                  '&:hover': {
                    color: '#111827',

                    background:
                      'linear-gradient(135deg, #f9df87 0%, #deb24a 100%)',

                    transform: 'translateY(-2px)',

                    boxShadow: '0 10px 30px rgba(214, 166, 58, 0.32)',
                  },

                  '&:hover .MuiButton-endIcon': {
                    transform: 'translateX(3px)',
                  },
                }}
              >
                Conoce Fénix
              </Button>

              <Button
                href="#contacto"
                endIcon={<ArrowForward />}
                disableRipple
                sx={{
                  borderRadius: '8px',

                  color: 'rgba(255,255,255,0.88)',

                  border: '1px solid rgba(255,255,255,0.35)',

                  backgroundColor: 'rgba(255,255,255,0)',

                  boxShadow: '0 0 0 rgba(214, 166, 58, 0)',

                  transition: buttonTransition,

                  '& .MuiButton-endIcon': {
                    transition: iconTransition,
                  },

                  '&:hover': {
                    color: 'rgba(247, 215, 116, 0.95)',

                    borderColor: 'rgba(247, 215, 116, 0.7)',

                    backgroundColor: 'rgba(247, 215, 116, 0.06)',

                    transform: 'translateY(-2px)',

                    boxShadow: '0 8px 24px rgba(214, 166, 58, 0.06)',
                  },

                  '&:hover .MuiButton-endIcon': {
                    transform: 'translateX(3px)',
                  },
                }}
              >
                Hablemos
              </Button>
            </div>
          </div>

          <div
            className={styles.visual}
            aria-label="Fénix oficial de Fénix Solutions: ala orgánica dorada y ala tecnológica de circuitos"
          >
            <div className={styles.imageHalo} />

            <Image
              className={styles.fenixImage}
              src="/images/hero/fenix-hero-placeholder.webp"
              alt="Fénix compuesto por un ala dorada orgánica y un ala de circuitos tecnológicos azul y dorado"
              width={1254}
              height={1254}
              priority
            />

            <span className={styles.caption}>
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
