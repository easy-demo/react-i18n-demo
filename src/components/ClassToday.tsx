import React, { PureComponent } from 'react';
import { InjectedI18nProps } from '@i18n-chain/react';
import i18n from '../i18n';
import moment from 'moment';

type Props = InjectedI18nProps<typeof i18n>;

class ClassToday extends PureComponent<Props> {
    render() {
        const { chain } = this.props;

        const today = chain.today({
            time: moment(),
        });

        return <div>{today}</div>
    }
}

export default i18n.hoc(ClassToday);
