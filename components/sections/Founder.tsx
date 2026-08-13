import Image from 'next/image';
import styles from './Founder.module.scss';

export default function Founder() {
  return (
    <section id="fundador" className={`${styles.founder} section`}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <span className="eyebrow">UNA MIRADA HUMANA</span>
            <h2>QUIÉN ESTÁ DETRÁS DE FÉNIX</h2>
            <p>
              Fénix nace de una convicción: que la tecnología puede transformar una organización cuando primero entendemos a las personas y las necesidades que existen detrás de ella.
            </p>
            <p>
              <strong>[Nombre del Fundador]</strong> — <em>Fundador de Fénix Solutions</em><br />
              Nos involucramos directamente en cada proyecto porque creemos en las relaciones de confianza, el criterio técnico y el valor de acompañar a nuestros clientes en cada etapa de su evolución.
            </p>
          </div>
          <figure className={styles.figure}>
            <Image
              src="/images/founder/founder-placeholder.webp"
              alt="Placeholder de una fotografía corporativa humana y profesional del fundador de Fénix Solutions"
              width={900}
              height={1100}
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
