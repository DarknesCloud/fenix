import { ArrowForward, AutoGraph, Code, Handshake, Language } from '@mui/icons-material';
import styles from './Services.module.scss';

const complementary = [
  {
    number: '02',
    title: 'Soluciones Tecnológicas',
    subtitle: 'IMPLEMENTAMOS',
    description: 'Implementamos infraestructura, redes e integraciones para responder a desafíos operativos específicos.',
    capabilities: 'Infraestructura · Redes · Integraciones · Seguridad tecnológica · Implementaciones tecnológicas',
    icon: <AutoGraph />,
  },
  {
    number: '03',
    title: 'Presencia Digital',
    subtitle: 'Identidad & Experiencia Digital',
    description: 'Creamos experiencias digitales que permiten a organizaciones comunicar quiénes son, qué hacen y a quiénes sirven.',
    capabilities: 'Sitios web · Plataformas digitales · Hosting · Mantenimiento · Optimización',
    icon: <Language />,
  },
  {
    number: '04',
    title: 'Acompañamiento Tecnológico',
    subtitle: 'MANTENEMOS Y EVOLUCIONAMOS',
    description: 'Mantenemos y evolucionamos la tecnología existente para que acompañe el crecimiento de tu organización.',
    capabilities: 'Soporte técnico · Mantenimiento · Equipos · Sistemas · Cámaras y seguridad · Asesoría tecnológica · Evolución tecnológica',
    icon: <Handshake />,
  },
] as const;

function CircuitMotif() {
  return (
    <svg className={styles.circuitMotif} viewBox="0 0 300 180" aria-hidden="true">
      <path d="M18 138H96V92H164V40H268" />
      <path d="M42 164H132V122H204V84H284" />
      <path d="M72 16V58H120V108H176V148H246" />
      <circle cx="96" cy="138" r="4" />
      <circle cx="164" cy="92" r="4" />
      <circle cx="204" cy="122" r="4" />
      <circle cx="120" cy="58" r="4" />
      <circle cx="176" cy="108" r="4" />
      <circle cx="268" cy="40" r="5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="soluciones" className={`${styles.services} section`}>
      <div className="container">
        <header className={styles.header}>
          <div>
            <span className="eyebrow">CAPACIDADES TECNOLÓGICAS</span>
            <h2>Tecnología para necesidades reales.</h2>
          </div>
          <p>Desarrollamos software a medida y ponemos nuestra experiencia tecnológica al servicio de las necesidades de cada organización.</p>
        </header>

        <div className={styles.layout}>
          <article className={styles.featured}>
            <CircuitMotif />
            <div className={styles.featureTop}>
              <span className={styles.featureNumber}>01</span>
              <div className={styles.featureIcon}><Code /></div>
            </div>
            <span className={styles.tag}>NUESTRA CAPACIDAD PRINCIPAL</span>
            <h3>Desarrollo de Software Personalizado</h3>
            <p>Diseñamos y desarrollamos plataformas, sistemas y herramientas digitales adaptadas a la operación y objetivos de cada organización.</p>
            <span className={styles.featureCapabilities}>Plataformas web · Sistemas internos · Automatización · Aplicaciones a medida · Integraciones</span>
            <a href="#contacto" className={styles.featureLink}>Hablemos de tu proyecto <ArrowForward /></a>
          </article>

          <div className={styles.complementary} aria-label="Capacidades complementarias">
            {complementary.map(({ number, title, subtitle, description, capabilities, icon }) => (
              <article className={styles.item} key={title}>
                <span className={styles.number}>{number}</span>
                <span className={styles.itemIcon}>{icon}</span>
                <div className={styles.itemCopy}>
                  <span className={styles.itemTag}>{subtitle}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span className={styles.capabilities}>{capabilities}</span>
                </div>
                <ArrowForward className={styles.arrow} />
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.closing}>
          <div>
            <span className="eyebrow">ENTENDER PRIMERO. PROPONER DESPUÉS.</span>
            <h3>¿Y si tu necesidad no aparece aquí?</h3>
          </div>
          <div>
            <p>No trabajamos con soluciones predeterminadas. Si tienes un problema tecnológico, podemos analizarlo contigo y determinar la mejor forma de resolverlo.</p>
            <a href="#contacto" className={styles.closingLink}>Hablemos con Fénix <ArrowForward /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}
