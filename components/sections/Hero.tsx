import Image from 'next/image';
import { ArrowForward, East } from '@mui/icons-material';
import { Button } from '@mui/material';
import NarrativeIndicator from '@/components/motion/NarrativeIndicator';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className="eyebrow">FÉNIX SOLUTIONS — TECNOLOGÍA CON PROPÓSITO</span>
            <h1>Tecnología que nace de una necesidad. <span>Soluciones que construyen futuro.</span></h1>
            <p>Desarrollamos soluciones tecnológicas a la medida de organizaciones que buscan resolver problemas reales, mejorar su forma de trabajar y crecer con tecnología.</p>
            <div className={styles.serviceDescriptor} aria-label="Servicios de Fénix Solutions">Desarrollo de software personalizado <span>·</span> Soluciones digitales <span>·</span> Acompañamiento tecnológico</div>
            <div className={styles.actions}>
              <Button className={styles.primaryAction} href="#nosotros" endIcon={<ArrowForward />}>Conoce Fénix</Button>
              <Button className={styles.secondaryAction} href="#contacto" endIcon={<ArrowForward />}>Hablemos</Button>
            </div>
          </div>
          <div className={styles.visual} aria-label="Fénix oficial de Fénix Solutions: ala orgánica dorada y ala tecnológica de circuitos">
            <div className={styles.imageHalo} />
            <Image className={styles.fenixImage} src="/images/hero/fenix-hero-placeholder.webp" alt="Fénix compuesto por un ala dorada orgánica y un ala de circuitos tecnológicos azul y dorado" width={1254} height={1254} priority />
            <span className={styles.caption}>EVOLUCIÓN<br/><b>CON PROPÓSITO</b></span>
          </div>
        </div>
        <div className={styles.footer}><NarrativeIndicator /><a href="#nosotros">Scroll para explorar <East /></a></div>
      </div>
    </section>
  );
}
