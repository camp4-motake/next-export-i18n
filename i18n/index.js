const ja = require('./ja');
const en = require('./en');

const i18n = {
  translations: { ja, en },
  defaultLang: 'ja',
  useBrowserDefault: true,
};

module.exports = i18n;
