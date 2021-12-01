import React from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import bemUtils from '../../utils/bemUtils';
import './formSection.less';

interface Props {
    title: string;
    titleTag?: string;
    titleIcon?: React.ReactNode;
    children: React.ReactNode;
}

const bem = bemUtils('formSection');

const FormSection = ({ title, titleTag, titleIcon, children }: Props) => (
    <section className={bem.block}>
        <Systemtittel tag={titleTag} className={bem.element('title')}>
            {titleIcon && <span className={bem.element('titleIcon')}>{titleIcon}</span>}
            {title}
        </Systemtittel>
        <div className={bem.element('content')}>{children}</div>
    </section>
);

export default FormSection;
