import { createI18n } from 'react-i18n-chain';
import en from './locales/en';

const i18n = createI18n({
    defaultLocale: {
        key: 'en',
        values: en,
    },
    loader: (name) => import(`./locales/${name}`),
});

export default i18n;