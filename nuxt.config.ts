import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'he'
      },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        }, {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        }, {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;600&display=swap'
        }, {
          rel: 'icon',
          href: '/favicon.png'
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    join(currentDir, './assets/styles.css')
  ],

  components: [
    { path: './components', pathPrefix: false }
  ],

  modules: ['nuxt-icon', 'nuxt-swiper'],

  runtimeConfig: {
    sendgridKey: process.env.SENDGRID_KEY
  }
});
