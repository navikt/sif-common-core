import React from 'react';
import Panel, { PanelProps } from 'nav-frontend-paneler';
import bemUtils from '../../utils/bemUtils';
import './responsivePanel.less';

const bem = bemUtils('responsivePanel');

const ResponsivePanel = ({ className, ...rest }: PanelProps) => (
    <Panel className={bem.classNames(bem.block, className)} {...rest} />
);

export default ResponsivePanel;
