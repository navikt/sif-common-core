import React from 'react';
import { AlertStripeFeil, AlertStripeInfo } from 'nav-frontend-alertstriper';
import { Element, Ingress, Undertittel } from 'nav-frontend-typografi';
import Box from '../../../components/box/Box';
import bemUtils from '../../../utils/bemUtils';
import { createMultiLocaleObject, getMissingMessageKeys, MessageFileFormat } from '../devIntlUtils';
import MessagesList from './MessagesList';
import './messagesPreview.less';

interface Props {
    title?: string;
    showMissingTextSummary?: boolean;
    showExplanation?: boolean;
    messages: MessageFileFormat;
}

const bem = bemUtils('messagesPreview');

const MessagesPreview = ({
    messages,
    title = 'Tekster',
    showMissingTextSummary = true,
    showExplanation = true,
}: Props) => {
    const allMessages = createMultiLocaleObject(messages);
    const missingMessages = getMissingMessageKeys(allMessages);
    return (
        <div className={bem.block}>
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
            {showExplanation && (
                <AlertStripeInfo>
                    <Ingress>Tegnforklaring</Ingress>
                    <Box>
                        Tekstene inneholder koder som brukes når applikasjonen setter inn verdier, og for å bestemme
                        hvordan teksten skal se ut.
                    </Box>
                    <Box>
                        <Element> Entall/flertall av en verdi</Element>
                        <blockquote style={{ margin: 0, padding: '0.5rem 0' }}>
                            <code>{`{timer, plural, one {# time} other {# timer}}`}</code>
                        </blockquote>
                        Kun ordene direkte etter # skal oversettes, resten er teknisk kode.
                    </Box>
                    <Box>
                        <Element>Sett inn verdi i tekst</Element>
                        <blockquote style={{ margin: 0, padding: '0.5rem 0' }}>
                            <code>{`Første gyldige dato er {fom}, og siste gyldige dato er {tom}`}</code>
                        </blockquote>
                        Ord i klammer, f.eks. <code>{`{fom}`}</code>, blir erstattet med en verdi fra applikasjonen, og
                        skal ikke oversettes.
                    </Box>
                    <Box>
                        <Element>HTML-formatering</Element>
                        <blockquote style={{ margin: 0, padding: '0.5rem 0' }}>
                            <code>{`<Box>En tekst som inneholder HTML kode</Box>`}</code>
                        </blockquote>
                        All tekst, untatt tegn/ord i {`< >`} skal oversettes.
                    </Box>
                </AlertStripeInfo>
            )}
            <MessagesList messages={messages} />
        </div>
    );
};

export default MessagesPreview;
