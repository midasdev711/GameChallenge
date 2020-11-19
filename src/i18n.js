import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from 'vuetify/lib/locale/en'
import fr from 'vuetify/lib/locale/fr'

Vue.use(VueI18n)

const messages = {
  en: {
    ...require('@/locales/en.json'),
    $vuetify: en,
  },
  fr: {
    ...require('@/locales/fr.json'),
    $vuetify: fr,
  },
}

let translation = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
})

export default translation;
