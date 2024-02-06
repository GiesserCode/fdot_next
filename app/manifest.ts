import {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fdot',
    short_name: 'Fdot',
    description: 'Fdot, Seite erstellen lassen, qualität, schnell, personalisiert, modern, Florian Giesser',
    start_url: '/',
    display: 'standalone',
    background_color: '#090909',
    theme_color: '#ddddddd',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}