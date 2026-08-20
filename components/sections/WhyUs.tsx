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
    title: 'Un punto de responsabilidad',
    text: 'Centralizamos el contexto técnico para que no tengas que empezar de cero cada vez que aparece una necesidad.',
    Icon: ForumOutlined,
    image: '/images/why-fenix/diagnostico-tecnico.webp',
    imageAlt: 'Esquema visual de diagnóstico y análisis técnico',
  },
  {
    title: 'Contexto que se conserva',
    text: 'Las decisiones, configuraciones y aprendizajes de cada trabajo forman parte del conocimiento que usamos en el siguiente.',
    Icon: AccountTreeOutlined,
    image: '/images/why-fenix/arquitectura-modular.webp',
    imageAlt: 'Esquema visual de arquitectura modular de sistemas',
  },
  {
    title: 'Capacidad según la situación',
    text: 'Podemos combinar software, infraestructura, soporte y asesoría sin obligarte a coordinar proveedores separados para cada frente.',
    Icon: ShieldOutlined,
    image: '/images/why-fenix/monitoreo-soporte.webp',
    imageAlt: 'Dashboard conceptual de monitoreo de infraestructura y soporte',
  },
  {
    title: 'Continuidad después del proyecto',
    text: 'Cuando una solución pasa a formar parte de la operación, podemos seguir atendiendo mantenimiento, incidencias y nuevas necesidades.',
    Icon: TrendingUpOutlined,
    image: '/images/why-fenix/evolucion-largo-plazo.webp',
    imageAlt: 'Diagrama visual de una red tecnológica en evolución a largo plazo',
  },
] as const;

export default function WhyUs() {
  return (
    <section id="por-que-fenix" className={`${styles.section} section`}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.label}>-- POR QUÉ FÉNIX</span>

          <div className={styles.heading}>
            <h2>
              Una relación técnica que <em>acumula contexto.</em>
            </h2>

            <p>
              El valor no está solamente en resolver una tarea. Está en conocer
              cada vez mejor tu entorno y poder asumir más responsabilidad sobre
              su continuidad tecnológica.
            </p>
          </div>
        </header>

        <div
          className={styles.comparison}
          aria-label="Diferencia entre un servicio puntual y la relación con Fénix Solutions"
        >
          <article className={styles.traditional}>
            <span>SERVICIO PUNTUAL</span>
            <p>Solicitud → Trabajo → Cierre</p>
          </article>

          <article className={styles.ally}>
            <span>FÉNIX SOLUTIONS</span>
            <p>Contexto → Responsabilidad → Seguimiento → Continuidad</p>
          </article>
        </div>

        <div className={styles.benefits}>
          {benefits.map(({ title, text, Icon, image, imageAlt }) => (
            <article className={styles.benefit} key={title}>
              <div className={styles.visual}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 680px) 100vw, 50vw"
                />
              </div>

              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
