import en from './locales/en';
import { createI18n } from '@i18n-chain/react';

const i18n = createI18n({
    defaultLocale: {
        key: 'en',
        values: en,
    },
    loader: (name) => import(`./locales/${name}`),
});

export default i18n;