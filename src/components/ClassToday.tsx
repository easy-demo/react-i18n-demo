import React, { PureComponent } from 'react';
import { I18nProvider } from '@i18n-chain/react';
import i18n from '../i18n';
import moment from 'moment';

class ClassToday extends PureComponent {
    render() {
        const today = i18n.today({
            time: moment(),
        });

        return <div>{today}</div>
    }
}

export default I18nProvider(i18n)(ClassToday);