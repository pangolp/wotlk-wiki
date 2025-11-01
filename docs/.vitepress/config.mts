import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Wotlk wiki',
  description: 'Wiki con información de la expasión 3.3.5a',
  base: '/wotlk-wiki/',
  vite: {
    build: {
      chunkSizeWarningLimit: 3000
    }
  },

  themeConfig: {
    siteTitle: 'Wotlk',
    lastUpdated: {
      text: 'Update',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Addons', link: '/addons/' },
      { text: 'AzerothCore', link: 'https://www.azerothcore.org/', target: '_blank', rel: 'noreferrer' },
      { text: 'ChromieCraft', link: 'https://www.chromiecraft.com/es/', target: '_blank', rel: 'noreferrer' },
    ],

    sidebar: [
      {
        text: 'Clases',
        collapsed: true,
        items: [
          { text: 'Brujo', link: '#' },
          { text: 'Caballero de la muerte', link: '#' },
          { text: 'Cazador', link: '#' },
          { text: 'Chaman', link: '#' },
          { text: 'Druida', link: '#' },
          { text: 'Guerrero', link: '#' },
          { text: 'Mago', link: '#' },
          { text: 'Paladin', link: '#' },
          { text: 'Picaro', link: '#' },
          { text: 'Sacerdote', link: '#' },
        ]
      },
      {
        text: 'Profesiones',
        collapsed: true,
        items: [
          { text: 'Alquimia', link: '#' },
          { text: 'Cocina', link: '#' },
          { text: 'Desuello', link: '#' },
          { text: 'Encantamiento', link: '#' },
          { text: 'Herboristería', link: '#' },
          { text: 'Herrería', link: '#' },
          { text: 'Ingeniería', link: '#' },
          { text: 'Inscripción', link: '#' },
          { text: 'Joyería', link: '#' },
          { text: 'Minería', link: '#' },
          { text: 'Peletería', link: '#' },
          { text: 'Pesca', link: '#' },
          { text: 'Primeros auxilios', link: '#' },
          { text: 'Sastrería', link: '#' },
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/pangolp/wotlk-wiki/edit/master/docs/:path',
      text: 'Editar'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pangolp/wotlk-wiki' }
    ],

    i18nRouting: true,
    externalLinkIcon: true,

    footer: {
      message: 'Proyecto mantenido por la comunidad',
      copyright: 'Wotlk wiki © 2025'
    }
  }
})
