import React, { Component } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import bemUtils from '../../utils/bemUtils';
import ActionLink from '../action-link/ActionLink';
import './validationErrorSummaryBase.less';

export interface ValidationSummaryError {
    name: string;
    message: string;
}

export interface ValidationErrorSummaryBaseProps {
    errors: ValidationSummaryError[];
    title: string;
    className?: string;
}

const bem = bemUtils('validationErrorSummary');
class ValidationErrorSummaryBase extends Component<ValidationErrorSummaryBaseProps> {
    render() {
        const { errors, title, className } = this.props;
        const listItems = errors.map((error) => {
            return (
                <li key={error.name}>
                    <ActionLink
                        className={bem.element('link')}
                        onClick={() => {
                            const elementById = document.getElementById(error.name);
                            const elementByName = document.getElementsByName(error.name)[0];
                            if (elementById) {
                                elementById.focus();
                            } else if (elementByName) {
                                elementByName.focus();
                            }
                        }}>
                        {error.message}
                    </ActionLink>
                </li>
            );
        });

        return (
            <article tabIndex={-1} className={`${bem.block} ${className}`}>
                <Undertittel>{title}</Undertittel>
                <ul className={bem.element('list')}>{listItems}</ul>
            </article>
        );
    }
}

export default ValidationErrorSummaryBase;
