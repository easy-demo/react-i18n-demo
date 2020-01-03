import React, { FunctionComponent } from 'react';
import { useI18n } from 'react-i18n-chain';
import i18n from '../i18n';

const HooksProfile: FunctionComponent = () => {
    useI18n(i18n);

    const message = i18n.profile.info({
        name: 'Tom',
    });

    return <div>{message}</div>;
};

export default HooksProfile;