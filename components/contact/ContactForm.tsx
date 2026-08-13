'use client';

import { type FormEvent, useState } from 'react';
import { ArrowForward } from '@mui/icons-material';
import styles from './ContactForm.module.scss';

type FormStatus = 'idle' | 'sending' | 'success';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus('sending');
    window.setTimeout(() => {
      form.reset();
      setStatus('success');
    }, 850);
  };

  const buttonLabel = status === 'sending'
    ? 'Enviando...'
    : status === 'success'
      ? 'Mensaje Enviado con Éxito'
      : 'Enviar Mensaje';

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-busy={status === 'sending'}>
      <div className={styles.fieldGrid}>
        <label>
          <span>Nombre completo <b>*</b></span>
          <input name="name" type="text" autoComplete="name" required placeholder="Tu nombre" />
        </label>
        <label>
          <span>Correo electrónico <b>*</b></span>
          <input name="email" type="email" autoComplete="email" required placeholder="nombre@organizacion.com" />
        </label>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          <span>Teléfono / WhatsApp <small>Opcional</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Tu número de contacto" />
        </label>
        <label>
          <span>Tipo de servicio o necesidad <b>*</b></span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Selecciona una opción</option>
            <option value="software-web">Desarrollo de Software / Sitio Web</option>
            <option value="infrastructure">Infraestructura &amp; Redes</option>
            <option value="support">Soporte Técnico &amp; Mantenimiento</option>
            <option value="consulting">Consultoría Tecnológica General</option>
          </select>
        </label>
      </div>

      <label className={styles.messageField}>
        <span>Mensaje</span>
        <textarea name="message" rows={7} placeholder="Cuéntanos sobre la necesidad, el contexto o el reto que quieres resolver." />
      </label>

      <div className={styles.formFooter}>
        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
          <span>{buttonLabel}</span><ArrowForward aria-hidden="true" />
        </button>
        <p role="status" aria-live="polite">
          {status === 'sending'
            ? 'Enviando tu mensaje…'
            : status === 'success'
              ? 'Gracias. Tu mensaje quedó registrado para iniciar la conversación.'
              : 'Los campos marcados con * son obligatorios.'}
        </p>
      </div>
    </form>
  );
}
