# Auditoría de accesibilidad WCAG — Fénix Solutions

**Fecha:** 12 de agosto de 2026  
**Alcance:** Landing principal, página de contacto y los componentes modificados recientemente: New Hope Opportunities, Por qué Fénix, Capacidades, CTA de cierre, Mirada Humana, Navbar, indicador narrativo, formulario y sistema global de movimiento.  
**Método:** revisión estática de código TSX/SCSS, comprobación de semántica y estados ARIA, análisis de pares cromáticos con utilidad local de relación de contraste, y compilación de producción.

> Esta revisión evalúa la implementación disponible contra criterios relevantes de **WCAG 2.2 nivel AA**. No sustituye una evaluación con personas usuarias de tecnologías de asistencia ni una prueba manual completa en todos los navegadores y lectores de pantalla.

## Resumen ejecutivo

La experiencia auditada cuenta con una base de accesibilidad sólida: estructura de encabezados, etiquetas asociadas a controles, alternativas textuales en las imágenes informativas, foco visible, control de movimiento reducido y contraste suficiente en los pares revisados. Durante la revisión se corrigieron cuatro aspectos de bajo riesgo: el foco tras navegación interna, el anuncio de estado del formulario, el exceso de anuncios del indicador narrativo y paradas de teclado innecesarias en tarjetas informativas. También se añadió un enlace global para saltar al contenido principal.

| Estado | Cantidad | Interpretación |
|---|---:|---|
| Conforme o cubierto por la implementación | 15 | No se identificó una barrera en el alcance revisado. |
| Corregido durante la auditoría | 5 | Ajuste aplicado y validado en compilación. |
| Requiere validación de despliegue | 2 | Depende de configuración o pruebas con personas usuarias. |

## Criterios y resultados

| Criterio WCAG | Estado | Resultado de la revisión |
|---|---|---|
| 1.1.1 Contenido no textual | Conforme | Las imágenes de New Hope y Por qué Fénix utilizan alternativas textuales específicas; iconos ornamentales se excluyen de la lectura con `aria-hidden`. |
| 1.3.1 Información y relaciones | Conforme | Secciones con encabezados, tarjetas como artículos, listas para los flujos de proceso y etiquetas asociadas a campos. Navbar, contenido principal y Footer quedan como hitos separados. |
| 1.3.2 Secuencia significativa | Conforme | El orden del DOM sigue la narrativa visual: capacidades, proyectos, caso, filosofía, mirada humana, diferenciación y CTA. |
| 1.4.3 Contraste mínimo | Conforme | Todos los pares cromáticos medidos superan 4.5:1 para texto normal. |
| 1.4.11 Contraste no textual | Conforme en el alcance revisado | Controles y elementos de foco usan el dorado claro sobre fondo azul profundo; el foco tiene borde de 3 px. |
| 2.2.2 Pausar, detener, ocultar | Conforme | No hay animación continua con información esencial; las transiciones son breves, de opacidad y transformación. |
| 2.3.3 Animación por interacción | Conforme | `prefers-reduced-motion` desactiva las transiciones complejas y el desplazamiento suave programático. |
| 2.4.1 Evitar bloques | Corregido | Se añadió el enlace `Saltar al contenido principal`, visible al recibir foco, en ambas rutas. |
| 2.4.3 Orden del foco | Corregido | Se eliminó `tabIndex={0}` de tarjetas informativas sin acción y se dirige el foco a los encabezados de destino tras navegación por anclas. |
| 2.4.7 Foco visible | Corregido | Enlaces y botones tenían foco visible; se añadió foco visual para encabezados que reciben foco después de navegar por anclas. |
| 2.4.11 Foco no oculto | Conforme | El destino de ancla usa `scroll-padding-top` y foco con `preventScroll`, evitando quedar detrás del Navbar fijo. |
| 2.5.3 Etiqueta en el nombre | Conforme | Los controles principales mantienen texto visible coincidente con sus nombres accesibles. |
| 3.2.1 Al recibir foco | Conforme | No se detectaron cambios de contexto al enfocar tarjetas o controles. |
| 3.3.1 Identificación de errores | Conforme | El formulario emplea validación nativa y `reportValidity()` ante campos no válidos. |
| 3.3.2 Etiquetas o instrucciones | Conforme | Los campos cuentan con etiquetas visibles, obligatoriedad explícita y orientación contextual. |
| 4.1.2 Nombre, función y valor | Conforme | Botones de menú con `aria-expanded` y `aria-controls`; filtros con `aria-pressed`; SVG ornamentales ocultos. |
| 4.1.3 Mensajes de estado | Corregido | El formulario declara `aria-busy` y un `role="status"` para informar envío y confirmación sin cambiar el foco. |

## Contraste medido

| Par evaluado | Relación | Resultado |
|---|---:|---|
| Texto muted sobre blanco | 4.97:1 | AA para texto normal |
| Dorado claro sobre azul profundo | 8.28:1 | AA para texto normal |
| Dorado de acento sobre azul profundo | 5.59:1 | AA para texto normal |
| Azul tecnológico sobre blanco | 7.28:1 | AA para texto normal |
| Blanco al 68% sobre azul profundo | 8.26:1 | AA para texto normal |
| Blanco al 74% sobre azul profundo | 9.60:1 | AA para texto normal |
| Blanco al 76% sobre azul profundo | 10.01:1 | AA para texto normal |
| Blanco al 52% sobre azul oscuro | 5.03:1 | AA para texto normal |

## Correcciones aplicadas

La auditoría incorporó un enlace de salto global y asignó el destino `#main-content` a las rutas principal y de contacto. También se separaron el Navbar y el Footer del hito `main`, por lo que el salto aterriza directamente en el contenido de la página.

En la navegación interna, cada ancla desplaza la vista y dirige el foco al encabezado del destino. El foco se hace visible mediante un contorno de alto contraste. El menú móvil declara su relación con la navegación mediante `aria-controls` y conserva `aria-expanded`.

Se convirtió el indicador narrativo en una guía visual decorativa mediante `aria-hidden="true"`; así ya no anuncia cada cambio de sección durante el scroll. El formulario ahora comunica los estados de envío y éxito mediante una región de estado y expone `aria-busy` mientras procesa la solicitud. Finalmente, las tarjetas de capacidades que no realizan ninguna acción dejaron de convertirse en paradas de teclado.

## Movimiento y transiciones

Las animaciones recientes de scroll, aparición de secciones, overlay de tarjetas e indicador usan exclusivamente `opacity` y `transform`. El proyecto cuenta con una regla global y reglas locales de `prefers-reduced-motion: reduce` que eliminan las transiciones, revelan el contenido y desactivan el desplazamiento animado iniciado desde el Navbar.

## Pendientes de validación de despliegue

| Tema | Recomendación |
|---|---|
| Canales de contacto configurados por variables de entorno | Antes de publicar, comprobar que `NEXT_PUBLIC_FENIX_EMAIL`, WhatsApp y redes contienen destinos reales. Un `mailto:` vacío o un enlace genérico no ofrece una alternativa de contacto suficientemente útil. |
| Prueba manual asistiva | Verificar el recorrido con teclado, NVDA + Firefox o VoiceOver + Safari, además de zoom al 200% y 400%, en las resoluciones objetivo. |

## Validación técnica

| Comprobación | Resultado |
|---|---|
| `pnpm typecheck` | Correcto, sin errores |
| `pnpm build` | Correcto, compilación de producción exitosa |

## Referencias

[1] [W3C — Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/)  
[2] [W3C — Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)  
[3] [W3C — Understanding Success Criterion 2.4.1: Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html)  
[4] [W3C — Understanding Success Criterion 2.3.3: Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)  
[5] [W3C — Understanding Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
