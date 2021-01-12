import React from 'react';

import { Undertittel } from 'nav-frontend-typografi';

import bemUtils from '../../utils/bemUtils';

import './formSection.less';

interface Props {
    title: string;
    titleTag?: string;
    titleIcon?: React.ReactNode;
}

const bem = bemUtils('formSection');

const FormSection = ({ title, titleTag, titleIcon, children }) => (
    <section className={bem.block}>
        <Undertittel tag={titleTag} className={bem.element('title')}>
            {titleIcon && <span className={bem.element('titleIcon')}>{titleIcon}</span>}
            {title}
        </Undertittel>
        <div className={bem.element('content')}>{children}</div>
    </section>
);

export default FormSection;
