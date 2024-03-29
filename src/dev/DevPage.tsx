import React from 'react';
import { useIntl } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { Systemtittel } from 'nav-frontend-typografi';
import LanguageToggle from '../common/components/language-toggle/LanguageToggle';
import { Locale } from '../common/types/Locale';
import NAVLogo from './components/svg/NAVLogo';
import DevContent from './DevContent';
import './styles/dev.less';

interface Props {
    onChangeLocale: (locale: Locale) => void;
}

const DevPage = ({ onChangeLocale }: Props) => {
    const intl = useIntl();
    return (
        <main className="devPage">
            <header className="header">
                <span className="navLogo">
                    <NAVLogo />
                </span>
                <span className="header__title">
                    <Systemtittel>Sykdom i familien - SIF-Common</Systemtittel>
                </span>
                <span className="languageToggler">
                    <LanguageToggle toggle={onChangeLocale} locale={intl.locale as Locale} />
                </span>
            </header>
            <div className="contentWrapper">
                <BrowserRouter>
                    <DevContent />
                </BrowserRouter>
            </div>
        </main>
    );
};

export default DevPage;
