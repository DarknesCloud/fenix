import styles from './HowWeWork.module.scss';

const pillars = [
  ['Comprender', 'Entendemos el contexto, las necesidades y los objetivos antes de proponer una solución.'],
  ['Construir con criterio', 'Elegimos y desarrollamos la tecnología adecuada para resolver el problema, no simplemente para utilizar tecnología.'],
  ['Acompañar para evolucionar', 'Nuestra relación no termina con la entrega. Acompañamos el mantenimiento, soporte y evolución de las soluciones.'],
];

export default function HowWeWork() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.header}><div><span className="eyebrow">NUESTRA FORMA DE TRABAJAR</span><h2>Comprender antes de <em>construir.</em></h2></div><p>Un criterio de trabajo que pone la necesidad real antes que la herramienta.</p></div>
        <div className={styles.list}>{pillars.map(([title, text], index) => <article className={styles.pillar} key={title}><span className={styles.node}>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div>
    </section>
  );
}
