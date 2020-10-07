import React from 'react';

import { Attachment } from '../../types/Attachment';
import bemHelper from '../../utils/bemUtils';
import AttachmentLabel from '../attachment-label/AttachmentLabel';

import './attachmentListElement.less';

const listElementBem = bemHelper(`attachmentListElement`);

interface AttachmentListElementProps {
    attachment: Attachment;
    renderRightAlignedContent?: () => React.ReactNode;
}

const AttachmentListElement: React.FunctionComponent<AttachmentListElementProps> = ({
    attachment,
    renderRightAlignedContent,
}) => (
    <li className={listElementBem.block}>
        <AttachmentLabel attachment={attachment} />
        {renderRightAlignedContent && (
            <span className={listElementBem.element('rightAlignedContent')}>{renderRightAlignedContent()}</span>
        )}
    </li>
);

export default AttachmentListElement;
