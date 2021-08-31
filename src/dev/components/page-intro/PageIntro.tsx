import React from 'react';
import { Ingress, Undertittel } from 'nav-frontend-typografi';
import Box from '../../../common/components/box/Box';
import Guide from '../../../common/components/guide/Guide';
import Counsellor from '../../../common/components/counsellor/Counsellor';

interface Props {
    title: string;
    children: React.ReactNode;
}

const PageIntro = ({ title, children }: Props) => (
    <>
        <Box padBottom="xl" margin="m">
            <Box padBottom={children ? 'm' : 'none'}>
                <Undertittel>{title}</Undertittel>
            </Box>
            {children && <Ingress tag="div">{children}</Ingress>}
            <Guide svg={<Counsellor theme="light" />}>sdf</Guide>
        </Box>
    </>
);

export default PageIntro;
