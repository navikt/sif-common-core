import React from 'react';
import Lenke from 'nav-frontend-lenker';
import { Attachment } from '../../types/Attachment';
import bemHelper from '../../utils/bemUtils';
import CustomSVG from '../custom-svg/CustomSVG';
import './attachmentLabel.less';

const attachmentIcon = require('./assets/attachment.svg').default;

interface Props {
    attachment: Attachment;
}

const attachmentLabelBem = bemHelper('attachmentLabel');

const AttachmentLabel = ({ attachment: { url, file } }: Props) => (
    <span>
        <CustomSVG iconRef={attachmentIcon} size={20} />
        {url === undefined && <div className={attachmentLabelBem.element('text')}>{file.name}</div>}
        {url !== undefined && (
            <Lenke className={attachmentLabelBem.element('text')} href={url} target="_blank">
                {file.name}
            </Lenke>
        )}
    </span>
);

export default AttachmentLabel;
