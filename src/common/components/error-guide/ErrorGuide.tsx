import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import Guide from '../guide/Guide';
import VeilederSVG from '../veileder-svg/VeilederSVG';
import Box from '../box/Box';

interface Props {
    title: string;
    children: React.ReactNode;
    stillHappy?: boolean;
}

const ErrorGuide = ({ title, stillHappy, children }: Props) => (
    <Guide
        type="plakat"
        kompakt={true}
        fargetema="normal"
        svg={<VeilederSVG mood={stillHappy ? 'happy' : 'uncertain'} />}>
        <Systemtittel tag="h2">{title}</Systemtittel>
        <Box margin="m" padBottom="l">
            {children}
        </Box>
    </Guide>
);

export default ErrorGuide;
