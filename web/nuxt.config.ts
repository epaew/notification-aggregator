import { Configuration } from '@nuxt/types'

const config: Configuration = {
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
      ],
      presets: [['@nuxt/babel-preset-app', { corejs: { version: 3 } }]],
    },
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s - ${process.env.npm_package_name as string}`,
    title: process.env.npm_package_name ?? '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description ?? '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Nuxt execution mode
   */
  mode: 'universal',
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js server configuration
   */
  server: {
    host: '0.0.0.0',
  },
  serverMiddleware: ['@@/src/index'],
  /*
   ** Nuxt.js src directory
   */
  srcDir: './src/front',
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
}

export default config
