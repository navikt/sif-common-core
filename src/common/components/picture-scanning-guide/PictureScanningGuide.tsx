import * as React from 'react';
import { FormattedHTMLMessage, FormattedMessage, useIntl } from 'react-intl';

import Lenke from 'nav-frontend-lenker';
import { Systemtittel, Undertittel } from 'nav-frontend-typografi';

import bemHelper from '../../utils/bemUtils';
import intlHelper from '../../utils/intlUtils';
import ScanningIcon from '../scanning-icon/ScanningIcon';
import PictureScanningExample from './PictureScanningExample';

import './pictureScanningGuide.less';

const bem = bemHelper('pictureScanningGuide');

export type PsgTextType = 'lege-erklaering' | 'dokument';

export interface Props {
    type?: PsgTextType
}

const PictureScanningGuide: React.FunctionComponent<Props> = ({type}: Props) => {
    const intl = useIntl();
    const svgIconHeight = 100;
    const textType: PsgTextType = type || 'lege-erklaering';

    return (
        <div className={bem.block}>
            <Systemtittel className={bem.element('title')}>
                <FormattedMessage id={`psg.${textType}.innholdstittel`} />
            </Systemtittel>

            <Undertittel className={bem.element('title')}>
                <FormattedMessage id={`psg.${textType}.section1.tittel`} />
            </Undertittel>
            <FormattedHTMLMessage tagName="ul" id={`psg.${textType}.section1.liste`} />

            <Undertittel className={bem.element('title')}>
                <FormattedMessage id={`psg.${textType}.section2.tittel`} />
            </Undertittel>

            <FormattedHTMLMessage tagName="ul" id={`psg.${textType}.section2.liste`} />
            <div className={bem.element('examples')}>
                <Undertittel tag="h3" className={bem.element('title')}>
                    <FormattedMessage id={`psg.${textType}.icon.heading`} />
                </Undertittel>
                <div className={bem.element('body')}>
                    <div className={bem.element('cell')}>
                        <PictureScanningExample
                            image={<ScanningIcon status="good" height={svgIconHeight} />}
                            status="suksess"
                            statusText={intlHelper(intl, `psg.${textType}.good`)}
                            description={intlHelper(intl, `psg.${textType}.icon.label.good`)}
                        />
                    </div>
                    <div className={bem.element('cell')}>
                        <PictureScanningExample
                            image={<ScanningIcon status="keystone" height={svgIconHeight} />}
                            status="feil"
                            statusText={intlHelper(intl, `psg.${textType}.bad`)}
                            description={intlHelper(intl, `psg.${textType}.icon.label.keystone`)}
                        />
                    </div>
                    <div className={bem.element('cell')}>
                        <PictureScanningExample
                            image={<ScanningIcon status="horizontal" height={svgIconHeight} />}
                            status="feil"
                            statusText={intlHelper(intl, `psg.${textType}.bad`)}
                            description={intlHelper(intl, `psg.${textType}.icon.label.horizontal`)}
                        />
                    </div>
                    <div className={bem.element('cell')}>
                        <PictureScanningExample
                            image={<ScanningIcon status="shadow" height={svgIconHeight} />}
                            status="feil"
                            statusText={intlHelper(intl, `psg.${textType}.bad`)}
                            description={intlHelper(intl, `psg.${textType}.icon.label.shadow`)}
                        />
                    </div>
                </div>
                <Lenke target="_blank" href={intlHelper(intl, `psg.${textType}.lenkepanel.url`)}>
                    <FormattedMessage id={`psg.${textType}.lenkepanel.text`} />
                </Lenke>
            </div>
        </div>
    );
};
export default PictureScanningGuide;
