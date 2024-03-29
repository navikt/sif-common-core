import React from 'react';
import bemHelper from '../../utils/bemUtils';
import Counsellor from '../counsellor/Counsellor';
import SpeechBubble, { SpeechBubbleProps } from '../speech-bubble/SpeechBubble';
import './counsellorWithSpeechBubble.less';

const bem = bemHelper('counsellorWithSpeechBubble');

export type CounsellorWithSpeechBubbleProps = SpeechBubbleProps;

const CounsellorWithSpeechBubble = ({ strongText, normalText, bottomContent }: SpeechBubbleProps) => (
    <section className={bem.block}>
        <SpeechBubble strongText={strongText} normalText={normalText} bottomContent={bottomContent} titleTag="h2" />
        <Counsellor theme="dark" />
    </section>
);

export default CounsellorWithSpeechBubble;
