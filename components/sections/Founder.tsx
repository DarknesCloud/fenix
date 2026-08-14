import Image from 'next/image';
import styles from './Founder.module.scss';

const values = [
  'Criterio técnico',
  'Cercanía',
  'Responsabilidad',
  'Visión de largo plazo',
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
            <span className="eyebrow">UNA MIRADA HUMANA</span>

            <h2 id="founder-title">QUIÉN ESTÁ DETRÁS DE FÉNIX</h2>

            <p className={styles.intro}>
              Fénix nace de una convicción: que la tecnología puede transformar
              una organización cuando primero entendemos a las personas y las
              necesidades que existen detrás de ella.
            </p>

            <div className={styles.identity}>
              <span className={styles.identityLine} aria-hidden="true" />

              <div>
                <strong>[Nombre del Fundador]</strong>
                <span>Fundador de Fénix Solutions</span>
              </div>
            </div>

            <blockquote className={styles.statement}>
              Tecnología con criterio, cercanía y propósito.
            </blockquote>

            <p className={styles.bodyCopy}>
              Nos involucramos directamente en cada proyecto porque creemos en
              las relaciones de confianza, el criterio técnico y el valor de
              acompañar a nuestros clientes en cada etapa de su evolución.
            </p>

            <div className={styles.values} aria-label="Principios de trabajo">
              {values.map((value, index) => (
                <span key={value}>
                  {value}

                  {index < values.length - 1 && <i aria-hidden="true" />}
                </span>
              ))}
            </div>
          </div>

          <figure className={styles.figure}>
            <div className={styles.figureFrame} aria-hidden="true" />

            <Image
              src="/images/founder/founder-placeholder.webp"
              alt="Placeholder de una fotografía corporativa humana y profesional del fundador de Fénix Solutions"
              width={900}
              height={1100}
              sizes="(max-width: 768px) 100vw, 42vw"
            />

            <div className={styles.figureMeta}>
              <span>FÉNIX SOLUTIONS</span>
              <span>FUNDADOR</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
