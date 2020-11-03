import { Locale } from './en';
import moment, { Moment } from 'moment';

const zh: Locale = {
    profile1: {
        info: [
            '我的名字是{{name}}，我来自{{country}}，',
            {
                name: undefined,
                country: '中国',
            },
        ],
    },
    today: [
        '北京时间：{{time}}',
        {
            time: (time: Moment = moment()) => {
                return time.format('YYYY-MM-DD');
            },
        },
    ],
    button: {
        submit: '提交',
        cancel: '取消',
    },
};

export default zh;