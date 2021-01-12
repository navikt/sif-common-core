import React from 'react';
import { Ingress, Undertittel } from 'nav-frontend-typografi';
import Box from '../../../common/components/box/Box';

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
        </Box>
    </>
);

export default PageIntro;
