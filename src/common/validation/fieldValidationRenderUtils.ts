import { IntlShape } from 'react-intl';
import intlHelper from '../utils/intlUtils';
import { IntlFieldValidationError, IntlFieldValidationResultValues } from './types';

export const isFieldValidationError = (error: any): error is IntlFieldValidationError =>
    typeof error === 'object' && error.key !== undefined;

export const renderFieldValidationValues = (
    intl: IntlShape,
    values: IntlFieldValidationResultValues | undefined
): { [key: string]: string } | undefined => {
    if (values === undefined) {
        return undefined;
    }
    const parsedValues: { [key: string]: string } = {};
    Object.keys(values).forEach((key) => {
        const valueOrFunc = values[key];
        if (valueOrFunc !== undefined) {
            parsedValues[key] = typeof valueOrFunc === 'function' ? valueOrFunc(intl) : `${valueOrFunc}`;
        }
    });
    return parsedValues;
};

export const renderFieldValidationError = (intl: IntlShape, error: IntlFieldValidationError): string => {
    return intlHelper(intl, error.key, renderFieldValidationValues(intl, error.values));
};
