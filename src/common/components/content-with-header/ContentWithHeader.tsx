import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import bemHelper from '../../utils/bemUtils';
import './contentWithHeader.less';

interface Props {
    header: string;
    headerTag?: 'h1' | 'h2' | 'h3' | 'h4' | string;
    children: React.ReactNode;
}

const bem = bemHelper('contentWithHeader');

const ContentWithHeader = ({ header, headerTag, children }: Props) => {
    return (
        <div className={bem.block}>
            <Normaltekst tag={headerTag} className={bem.element('header')}>
                {header}
            </Normaltekst>
            {children}
        </div>
    );
};

export default ContentWithHeader;
