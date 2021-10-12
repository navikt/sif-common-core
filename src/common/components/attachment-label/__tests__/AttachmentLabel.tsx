import { render } from '@testing-library/react';
import React from 'react';

import { Attachment } from '../../../types/Attachment';
import AttachmentLabel from '../AttachmentLabel';

describe('<AttachmentLabel />', () => {
    const attachment: Partial<Attachment> = {
        file: new File([''], 'filename', { type: 'text/png' }),
    };

    it('should show icon to the user', () => {
        const { getByText } = render(<AttachmentLabel attachment={attachment as Attachment} />);
        expect(getByText('svg')).toBeTruthy();
    });

    it('should show the filename', () => {
        const { getByText } = render(<AttachmentLabel attachment={attachment as Attachment} />);
        expect(getByText(attachment.file!.name)).toBeTruthy();
    });

    describe('the provided attachment has url', () => {
        const attachmentUrl = 'vedlegg1';
        beforeEach(() => {
            attachment.url = attachmentUrl;
        });

        it('should render the filename as a link with target set to _blank', () => {
            const { container } = render(<AttachmentLabel attachment={attachment as Attachment} />);
            const anchorElement = container.querySelector(`a[href='${attachmentUrl}']`);
            expect(anchorElement).not.toBeNull();
            expect(anchorElement!.getAttribute('target')).toEqual('_blank');
        });
    });
});
