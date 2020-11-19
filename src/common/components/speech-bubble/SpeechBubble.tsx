import React from 'react';

import { Element, Normaltekst as NormalText } from 'nav-frontend-typografi';

import Box from '../../components/box/Box';
import bemHelper from '../../utils/bemUtils';

import './speechBubble.less';

const bem = bemHelper('speechBubble');

interface SpeechBubbleProps {
    strongText: string;
    normalText: string;
    titleTag?: 'h1' | 'h2' | 'h3' | string;
    bottomContent?: React.ReactNode;
}

const SpeechBubble: React.FunctionComponent<SpeechBubbleProps> = ({
    titleTag,
    strongText,
    normalText,
    bottomContent,
}) => (
    <div className={bem.block}>
        <Element tag={titleTag} className={bem.element('strongText')}>
            {strongText}
        </Element>
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
