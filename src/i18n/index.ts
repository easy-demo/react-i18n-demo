import { I18n } from 'react-i18n-chain';
import en from './locales/en';

const i18n = new I18n({
    defaultLocale: {
        key: 'en',
        values: en,
    },
    loader: (name) => import(`./locales/${name}`),
});

export default i18n;