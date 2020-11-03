import React, { FunctionComponent } from 'react';
import i18n from '../i18n';

const HooksProfile: FunctionComponent = () => {
    const chain = i18n.use();
    
    const message = chain.profile1.info({
        name: 'Tom',
    });

    return <div>{message}</div>;
};

export default HooksProfile;