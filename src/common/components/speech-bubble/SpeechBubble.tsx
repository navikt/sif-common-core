import * as React from 'react';

import { Normaltekst as NormalText } from 'nav-frontend-typografi';

import Box from '../../components/box/Box';
import bemHelper from '../../utils/bemUtils';

import './speechBubble.less';

const bem = bemHelper('speechBubble');

interface SpeechBubbleProps {
    strongText: string;
    normalText: string;
    bottomContent?: React.ReactNode;
}

const SpeechBubble: React.FunctionComponent<SpeechBubbleProps> = ({ strongText, normalText, bottomContent }) => (
    <div className={bem.block}>
        <NormalText className={bem.element('strongText')}>{strongText}</NormalText>
        <Box margin="m">
            <NormalText className={bem.element('normalText')}>{normalText}</NormalText>
        </Box>
        {bottomContent && (
            <Box margin="m">
                <div className={bem.element('bottomContent')}> {bottomContent}</div>
            </Box>
        )}
        <div className={bem.element('triangle')} />
    </div>
);

export default SpeechBubble;
