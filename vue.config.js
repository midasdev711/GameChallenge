const API_URL = process.env.VUE_APP_DEV_API_ROOT;
const GEO_API_URL = 'https://geodata.solutions/api/api.php';

module.exports = {
  lintOnSave: false,

  devServer: {
    // disableHostCheck: true,
    proxy: {
      '^/api/api.php': {
        target: GEO_API_URL,
        ws: true,
        "pathRewrite": {
          "^/api/api.php": "/api/api.php"
        },
        changeOrigin: true
      }
    }
  },

  transpileDependencies: ['vuetify', 'x5-gmaps'],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
