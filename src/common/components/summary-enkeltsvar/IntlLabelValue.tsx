import React from 'react';
import { useIntl } from 'react-intl';
import bemUtils from '../../utils/bemUtils';
import intlHelper from '../../utils/intlUtils';

interface Props {
    children: React.ReactNode;
    labelKey: string;
}

const bem = bemUtils('summaryLabelValue');

const IntlLabelValue = ({ labelKey: intlLabelKey, children }: Props) => {
    const intl = useIntl();
    return (
        <div className={bem.block}>
            <span className={bem.element('label')}>{intlHelper(intl, intlLabelKey)}:</span>{' '}
            <span className={bem.element('value')}>{children}</span>
        </div>
    );
};

export default IntlLabelValue;
