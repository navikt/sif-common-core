import React from 'react';
import { AlertStripeFeil, AlertStripeInfo } from 'nav-frontend-alertstriper';
import { Element, Ingress, Undertittel } from 'nav-frontend-typografi';
import Box from '../../../components/box/Box';
import bemUtils from '../../../utils/bemUtils';
import { createMultiLocaleObject, getMissingMessageKeys, MessageFileFormat } from '../devIntlUtils';
import './messagesPreview.less';

interface Props {
    title?: string;
    showMissingTextSummary?: boolean;
    messages: MessageFileFormat;
}

const bem = bemUtils('messagesList');

const MessagesPreview = ({ messages, title = 'Tekster', showMissingTextSummary = true }: Props) => {
    const allMessages = createMultiLocaleObject(messages);
    const missingMessages = getMissingMessageKeys(allMessages);
    return (
        <>
            {missingMessages && showMissingTextSummary && (
                <>
                    <Undertittel>Tekstnøkler som ikke er oversatt</Undertittel>
                    <Box margin="m">
                        <AlertStripeFeil>
                            <pre className={bem.element('missingList')}>
                                {Object.keys(missingMessages).map((key) => (
                                    <div key={key}>
                                        {missingMessages[key]}: {key}
                                    </div>
                                ))}
                            </pre>
                        </AlertStripeFeil>
                    </Box>
                </>
            )}
            <Box margin="xl" padBottom="l">
                <Undertittel>{title}</Undertittel>
            </Box>
            <AlertStripeInfo>
                <Ingress>Tegnforklaring</Ingress>
                <p>
                    Tekstene inneholder koder som brukes når applikasjonen setter inn verdier, og for å bestemme hvordan
                    teksten skal se ut.
                </p>
                <p>
                    <Element> Entall/flertall av en verdi</Element>
                    <blockquote style={{ margin: 0, padding: '0.5rem 0' }}>
                        <code>{`{timer, plural, one {# time} other {# timer}}`}</code>
                    </blockquote>
                    Kun ordene direkte etter # skal oversettes, resten er teknisk kode.
                </p>
                <p>
                    <Element>Sett inn verdi i tekst</Element>
                    <blockquote style={{ margin: 0, padding: '0.5rem 0' }}>
                        <code>{`Første gyldige dato er {fom}, og siste gyldige dato er {tom}`}</code>
                    </blockquote>
                    Ord i klammer, f.eks. <code>{`{fom}`}</code>, blir erstattet med en verdi fra applikasjonen, og skal
                    ikke oversettes.
                </p>
                <p>
                    <Element>HTML-formatering</Element>
                    <blockquote style={{ margin: 0, padding: '0.5rem 0' }}>
                        <code>{`<p>En tekst som inneholder HTML kode</p>`}</code>
                    </blockquote>
                    All tekst, untatt tegn/ord i {`< >`} skal oversettes.
                </p>
            </AlertStripeInfo>
            <dl className={bem.block}>
                {Object.keys(allMessages).map((key) => {
                    return (
                        <span key={key}>
                            <dt>{key}</dt>
                            {Object.keys(allMessages[key]).map((locale) => {
                                const value = allMessages[key][locale];
                                return (
                                    <dd key={locale}>
                                        <span className={bem.element('locale')}>
                                            <span className={bem.element('etikett')}>{locale}:</span>
                                        </span>
                                        <span className={bem.element('message')}>
                                            {value ? value : <span className={bem.element('missing')}>Mangler!</span>}
                                        </span>
                                    </dd>
                                );
                            })}
                        </span>
                    );
                })}
            </dl>
        </>
    );
};

export default MessagesPreview;
