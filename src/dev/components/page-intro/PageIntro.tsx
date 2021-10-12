import React from 'react';
import { Ingress, Undertittel } from 'nav-frontend-typografi';
import Box from '../../../common/components/box/Box';
import Guide from '../../../common/components/guide/Guide';
import Counsellor from '../../../common/components/counsellor/Counsellor';
import AttachmentLabel from '../../../common/components/attachment-label/AttachmentLabel';
import { Attachment } from '../../../common/types/Attachment';

interface Props {
    title: string;
    children: React.ReactNode;
}

const PageIntro = ({ title, children }: Props) => {
    const attachment: Attachment = {
        file: { name: 'Filnavn' } as any,
        pending: false,
        uploaded: true,
        url: 'sdf',
    };
    return (
        <>
            <Box padBottom="xl" margin="m">
                <Box padBottom={children ? 'm' : 'none'}>
                    <Undertittel>{title}</Undertittel>
                </Box>
                <AttachmentLabel attachment={attachment} />
                {children && <Ingress tag="div">{children}</Ingress>}
                <Guide svg={<Counsellor theme="light" />}>sdf</Guide>
            </Box>
        </>
    );
};

export default PageIntro;
