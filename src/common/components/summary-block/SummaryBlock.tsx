import React from 'react';
import bemUtils from '../../utils/bemUtils';
import Box from '../box/Box';
import ContentWithHeader from '../content-with-header/ContentWithHeader';
import './summaryBlock.less';

interface Props {
    header: string;
    children: React.ReactNode;
    headerTag?: 'h1' | 'h2' | 'h3' | 'h4' | string;
    indentChildren?: boolean;
}

const bem = bemUtils('summaryBlock');

const SummaryBlock = ({ header, headerTag, children, indentChildren }: Props) => (
    <Box margin="xl" className={bem.block}>
        <ContentWithHeader header={header} headerTag={headerTag}>
            <div className={bem.element('content', indentChildren ? 'indented' : '')}>{children}</div>
        </ContentWithHeader>
    </Box>
);

export default SummaryBlock;
