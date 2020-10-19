import { IntlShape } from 'react-intl';

type valueFunction = (intl: IntlShape) => string;

export interface IntlFieldValidationResultValues {
    [key: string]: string | number | Date | valueFunction | undefined;
}

export interface IntlFieldValidationError {
    key: string;
    values?: IntlFieldValidationResultValues;
}

export type FieldValidationResult = IntlFieldValidationError | undefined | void;

export type FormikDatepickerValue = {
    date: Date | undefined;
    dateString: string;
};
