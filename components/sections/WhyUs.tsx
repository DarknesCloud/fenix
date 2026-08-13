import Image from 'next/image';
import {
  AccountTreeOutlined,
  ForumOutlined,
  ShieldOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material';
import styles from './WhyUs.module.scss';

const benefits = [
  {
    title: 'No imponemos herramientas',
    text: '→ Entendemos la necesidad antes de proponer.',
    Icon: ForumOutlined,
    image: '/images/why-fenix/diagnostico-tecnico.webp',
    imageAlt: 'Esquema visual de diagnóstico y análisis técnico',
  },
  {
    title: 'No vendemos paquetes rígidos',
    text: '→ Construimos soluciones adaptadas a tu realidad.',
    Icon: AccountTreeOutlined,
    image: '/images/why-fenix/arquitectura-modular.webp',
    imageAlt: 'Esquema visual de arquitectura modular de sistemas',
  },
  {
    title: 'No entregamos y nos vamos',
    text: '→ Acompañamos la evolución continua de tu tecnología.',
    Icon: ShieldOutlined,
    image: '/images/why-fenix/monitoreo-soporte.webp',
    imageAlt: 'Dashboard conceptual de monitoreo de infraestructura y soporte',
  },
  {
    title: 'No buscamos transacciones puntuales',
    text: '→ Construimos relaciones estratégicas de largo plazo.',
    Icon: TrendingUpOutlined,
    image: '/images/why-fenix/evolucion-largo-plazo.webp',
    imageAlt: 'Diagrama visual de una red tecnológica en evolución a largo plazo',
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-fenix" className={`${styles.section} section`}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.label}>-- POR QUÉ FÉNIX</span>
          <div className={styles.heading}>
            <h2>Más que un proveedor. <em>Un aliado tecnológico.</em></h2>
            <p>Una relación basada en comprender mejor, construir con criterio y permanecer cerca de tu equipo.</p>
          </div>
        </header>

        <div className={styles.comparison} aria-label="Diferencia entre proveedor tradicional y aliado Fénix">
          <article className={styles.traditional}>
            <span>PROVEEDOR TRADICIONAL</span>
            <p>Solicitud → Ejecución → Entrega</p>
          </article>
          <article className={styles.ally}>
            <span>FÉNIX SOLUTIONS</span>
            <p>Comprender → Diseñar → Construir → Acompañar → Evolucionar</p>
          </article>
        </div>

        <div className={styles.benefits}>
          {benefits.map(({ title, text, Icon, image, imageAlt }) => (
            <article className={styles.benefit} key={title}>
              <div className={styles.visual}>
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 680px) 100vw, 50vw" />
              </div>
              <span className={styles.icon} aria-hidden="true"><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
