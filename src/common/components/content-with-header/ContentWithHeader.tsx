import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import bemHelper from '../../utils/bemUtils';
import './contentWithHeader.less';

interface Props {
    header: string;
    children: React.ReactNode;
}

const bem = bemHelper('contentWithHeader');

const ContentWithHeader = ({ header, children }: Props) => {
    return (
        <div className={bem.block}>
            <Normaltekst className={bem.element('header')}>{header}</Normaltekst>
            {children}
        </div>
    );
};

export default ContentWithHeader;
