import Image from 'next/image';
import styles from './Founder.module.scss';

const principles = [
  'Explicar antes de ejecutar',
  'Compromisos realistas',
  'Seguimiento cercano',
  'Construir para sostener',
] as const;

export default function Founder() {
  return (
    <section
      id="fundador"
      className={`${styles.founder} section`}
      aria-labelledby="founder-title"
    >
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <span className="eyebrow">QUIÉN ESTÁ DETRÁS</span>

            <h2 id="founder-title">FÉNIX NACE DE UNA FORMA DE TRABAJAR.</h2>

            <p className={styles.intro}>
              Fénix Solutions fue fundada por Saul Leiva con una idea sencilla:
              la tecnología debe poder entenderse, justificarse y mantenerse en el
              tiempo, no limitarse a resolver una tarea aislada.
            </p>

            <div className={styles.identity}>
              <span className={styles.identityLine} aria-hidden="true" />

              <div>
                <strong>Saul Leiva</strong>
                <span>Fundador · Fénix Solutions</span>
              </div>
            </div>

            <p className={styles.statement}>
              Una solución útil no termina cuando se entrega: debe poder explicarse,
              operar con claridad y sostenerse cuando el contexto cambia.
            </p>

            <p className={styles.bodyCopy}>
              Esa forma de trabajar se refleja en cada proyecto: entender el
              contexto, hablar con claridad sobre lo que sí tiene sentido hacer y
              acompañar la implementación sin perder de vista cómo funciona la
              operación en la práctica.
            </p>

            <div className={styles.values} aria-label="Principios personales de trabajo">
              {principles.map((value, index) => (
                <span key={value}>
                  {value}

                  {index < principles.length - 1 && <i aria-hidden="true" />}
                </span>
              ))}
            </div>
          </div>

          <figure className={styles.figure}>
            <div className={styles.figureFrame} aria-hidden="true" />

            <Image
              src="/images/fenix-logo-full.png"
              alt="Identidad visual de Fénix Solutions"
              width={1000}
              height={1000}
              sizes="(max-width: 768px) 86vw, 34vw"
            />

            <figcaption className={styles.figureMeta}>
              <span>FÉNIX SOLUTIONS</span>
              <span>DESDE SAN PEDRO SULA</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
