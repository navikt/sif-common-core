import React from 'react';
import { IntlProvider } from 'react-intl';
import { getBokmålLocale, getNynorskLocale } from '../../../common/utils/localeUtils';
import { appMessages } from './messages';

export interface IntlProviderProps {
    locale: string;
    children: React.ReactNode;
    onError?: (error: any) => void;
}

const AppIntlProvider = ({ locale, onError, children }: IntlProviderProps) => {
    const messages = locale === 'nb' ? appMessages.nb : appMessages.nn;
    const localeToUse = locale === 'nb' ? getBokmålLocale() : getNynorskLocale();
    return (
        <IntlProvider locale={localeToUse} messages={messages} onError={onError}>
            {children}
        </IntlProvider>
    );
};

export default AppIntlProvider;
