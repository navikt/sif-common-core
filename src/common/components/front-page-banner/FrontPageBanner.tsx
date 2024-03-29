import React from 'react';
import bemHelper from '../../utils/bemUtils';
import Banner, { BannerSize } from '../banner/Banner';
import CounsellorWithSpeechBubble, {
    CounsellorWithSpeechBubbleProps,
} from '../counsellor-with-speech-bubble/CounsellorWithSpeechBubble';
import './frontPageBanner.less';

const bem = bemHelper('frontPageBanner');

interface Props {
    bannerSize: BannerSize;
    counsellorWithSpeechBubbleProps: CounsellorWithSpeechBubbleProps;
}

const FrontPageBanner = ({ bannerSize, counsellorWithSpeechBubbleProps }: Props) => (
    <Banner size={bannerSize} className={bem.block}>
        <CounsellorWithSpeechBubble {...counsellorWithSpeechBubbleProps} />
    </Banner>
);

export default FrontPageBanner;
