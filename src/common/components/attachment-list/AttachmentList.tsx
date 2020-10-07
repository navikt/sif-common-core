import React from 'react';

import { Attachment } from '../../types/Attachment';
import AttachmentListElement from '../attachment-list-element/AttachmentListElement';
import UnstyledList from '../unstyled-list/UnstyledList';

interface AttachmentListProps {
    attachments: Attachment[];
}

const AttachmentList: React.FunctionComponent<AttachmentListProps> = ({ attachments, ...otherProps }) => (
    <UnstyledList>
        {attachments
            .filter(({ pending, uploaded }) => uploaded || pending)
            .map((attachment, index) => (
                <AttachmentListElement attachment={attachment} key={attachment.file.name + index} {...otherProps} />
            ))}
    </UnstyledList>
);

export default AttachmentList;
