import React from 'react';
import Box, { BoxMargin } from '../box/Box';

interface Props {
    margin?: BoxMargin;
    paddingBottom?: BoxMargin;
    children: React.ReactNode;
}

const FormBlock = ({ margin = 'xl', paddingBottom, children }: Props) => (
    <Box margin={margin} padBottom={paddingBottom}>
        {children}
    </Box>
);

export default FormBlock;
