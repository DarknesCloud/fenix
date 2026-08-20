import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fénix Solutions',
    short_name: 'Fénix',
    description:
      'Desarrollo de software personalizado, soluciones tecnológicas y acompañamiento para empresas y organizaciones.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffdfa',
    theme_color: '#0b2138',
    lang: 'es-HN',
    icons: [
      {
        src: '/images/fenix-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
