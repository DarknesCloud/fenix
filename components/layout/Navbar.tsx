'use client';

import { type MouseEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Close, Menu } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import styles from './Navbar.module.scss';

const links = [
  ['Inicio', '#inicio'],
  ['Nosotros', '#nosotros'],
  ['Soluciones', '#soluciones'],
  ['Caso de Éxito', '#caso-de-exito'],
  ['Contacto', '/contacto'],
];

export default function Navbar() {
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('#inicio');

  const isHome = pathname === '/';

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 64);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    if (!isHome) {
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }

    const sections = links
      .filter(([, href]) => href.startsWith('#'))
      .map(([, href]) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          setActiveId(`#${visible.target.id}`);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: '-18% 0px -58% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [isHome]);

  const getHref = (href: string) =>
    href.startsWith('#') && !isHome ? `/${href}` : href;

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setOpen(false);

    if (!isHome || !href.startsWith('#')) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    setActiveId(href);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const focusTarget =
      target.querySelector<HTMLElement>('h1, h2, h3') ?? target;

    const hadTabIndex = focusTarget.hasAttribute('tabindex');

    if (!hadTabIndex) {
      focusTarget.setAttribute('tabindex', '-1');
    }

    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    focusTarget.focus({
      preventScroll: true,
    });

    if (!hadTabIndex) {
      focusTarget.addEventListener(
        'blur',
        () => focusTarget.removeAttribute('tabindex'),
        { once: true }
      );
    }

    window.history.replaceState(null, '', href);
  };

  return (
    <header
      className={`${styles.navbar} ${
        scrolled || !isHome ? styles.scrolled : ''
      }`}
    >
      <Link
        href="/"
        className={styles.logo}
        aria-label="Fénix Solutions, inicio"
      >
        <Image
          className={styles.logoImage}
          src="/images/fenix-navbar.png"
          alt="Fénix Solutions"
          width={1815}
          height={832}
          sizes="180px"
        />
      </Link>

      <nav
        id="primary-navigation"
        className={`${styles.navLinks} ${open ? styles.navOpen : ''}`}
        aria-label="Navegación principal"
      >
        {links.map(([label, href]) => {
          const isContact = href === '/contacto';

          const isActive = isContact
            ? pathname === '/contacto'
            : isHome && activeId === href;

          return (
            <Link
              key={href}
              href={getHref(href)}
              className={isActive ? styles.active : ''}
              aria-current={
                isActive ? (isContact ? 'page' : 'location') : undefined
              }
              onClick={(event) => handleNavigation(event, href)}
            >
              {label}
            </Link>
          );
        })}

        <Button
          component={Link}
          className={styles.cta}
          href="/contacto"
          onClick={() => setOpen(false)}
        >
          Hablemos
        </Button>
      </nav>

      <IconButton
        ref={menuButtonRef}
        className={styles.menuButton}
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-controls="primary-navigation"
        aria-expanded={open}
      >
        {open ? <Close /> : <Menu />}
      </IconButton>
    </header>
  );
}
