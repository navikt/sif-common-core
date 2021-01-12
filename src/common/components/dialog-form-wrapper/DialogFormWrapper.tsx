import React from 'react';
import bemUtils from '../../utils/bemUtils';
import './dialogFormWrapper.less';

const bem = bemUtils('dialogFormWrapper');

export type DialogFormWrapperWidths = 'narrow' | 'wide';

interface Props {
    children: React.ReactNode;
    width?: DialogFormWrapperWidths;
}

const DialogFormWrapper = ({ width = 'narrow', children }: Props) => (
    <div className={bem.classNames(bem.block, bem.modifier(width))}>{children}</div>
);

export default DialogFormWrapper;
