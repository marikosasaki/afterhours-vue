export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' }
    ],
    script: [
      {src: "//cdn.kaizenplatform.net/s/ef/a4aaad45e99c11.js?kz_namespace=kzs"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: 'node_modules/normalize.css/normalize.css', lang: 'css' },
    { src: '@/assets/sass/style.scss', lang: 'scss' },
    { src: '@/assets/sass/common.scss', lang: 'scss' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules:  [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
    //'~/assets/sass/style.scss'
     //'~/assets/sass/foundation/mixin/_index.scss'
     ]
  },
   router: {
    base: '/afterhours-vue/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
