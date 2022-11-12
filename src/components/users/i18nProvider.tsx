import englishLocale from './i18n/en';

const messages = {
  en: {
    name: 'English',
    locale: () => Promise.resolve(englishLocale)
  },
  // en: {
  //   name: 'English',
  //   locale: () => import('./i18n/en').then(messages => messages.default)
  // },
};

export default {
  defaultLocale: 'en',
  getLocale: (locale: keyof typeof messages) => messages[locale].locale(),
}