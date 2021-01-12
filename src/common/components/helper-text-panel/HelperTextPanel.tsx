import React from 'react';
import bemUtils from '../../utils/bemUtils';
import './helperTextPanel.less';

type Props = {
    children: React.ReactNode;
};
const bem = bemUtils('helperTextPanel');

const HelperTextPanel = ({ children }: Props) => <div className={bem.block}>{children}</div>;

export default HelperTextPanel;
