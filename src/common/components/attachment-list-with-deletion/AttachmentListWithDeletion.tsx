import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Attachment } from '../../types/Attachment';
import intlHelper from '../../utils/intlUtils';
import AttachmentListElement from '../attachment-list-element/AttachmentListElement';
import DeleteButton from '../delete-button/DeleteButton';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import UnstyledList from '../unstyled-list/UnstyledList';

interface AttachmentListWithDeletionProps {
    attachments: Attachment[];
    onRemoveAttachmentClick: (attachment: Attachment, e: React.SyntheticEvent) => void;
}

const AttachmentListWithDeletion: React.FunctionComponent<AttachmentListWithDeletionProps> = ({
    attachments,
    onRemoveAttachmentClick
}) => {
    const intl = useIntl();
    return (
        <UnstyledList>
            {attachments
                .filter(({ pending, uploaded }) => uploaded || pending)
                .map((attachment, index) => (
                    <AttachmentListElement
                        attachment={attachment}
                        key={attachment.file.name + index}
                        renderRightAlignedContent={() =>
                            attachment.pending ? (
                                <LoadingSpinner type="XS" />
                            ) : (
                                <DeleteButton
                                    ariaLabel={intlHelper(intl, 'vedleggsliste.fjernKnapp')}
                                    onClick={(e) => onRemoveAttachmentClick(attachment, e)}>
                                    <FormattedMessage id="vedleggsliste.fjernKnapp" />
                                </DeleteButton>
                            )
                        }
                    />
                ))}
        </UnstyledList>
    );
};

export default AttachmentListWithDeletion;
