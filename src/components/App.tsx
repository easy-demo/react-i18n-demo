import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import HooksProfile from './HooksProfile';
import i18n from '../i18n';
import styles from './App.css';
import ClassToday from './ClassToday';

const App: FunctionComponent = () => {
    const [locale, setLocale] = useState('en');
    
    useEffect(() => {
        return i18n._.listen(setLocale);
    }, []);

    const switchToEnglish = () => {
        i18n._.locale('en');
    };

    const switchToChinese = () => {
        i18n._.locale('zh');
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <a
                    className={`${styles.link} ${locale === 'en' ? styles.selected : ''}`} 
                    onClick={switchToEnglish}
                >
                    English
                </a>
                &nbsp;|&nbsp;
                <a
                    className={`${styles.link} ${locale === 'zh' ? styles.selected : ''}`} 
                    onClick={switchToChinese}
                >
                    中文
                </a>
            </div>
            <ClassToday />
            <HooksProfile />
        </div>
    );
};

export default App;