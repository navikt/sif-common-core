import { IntlShape } from 'react-intl';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import intlHelper from '../utils/intlUtils';

export const constructIntlValidationErrorKey = (error: string, fieldName: string, formName?: string): string =>
    `${formName ? `${formName}.` : ''}validation.${fieldName}.${error}`;

export const getFieldErrorRenderer = (intl: IntlShape, formName?: string) => (error: string, fieldName: string) => {
    return intlHelper(intl, constructIntlValidationErrorKey(error, fieldName, formName));
};

export const getSummaryFieldErrorRenderer = (intl: IntlShape, formName?: string) => (
    error: string,
    fieldName: string
) => {
    const feil: FeiloppsummeringFeil = {
        skjemaelementId: fieldName,
        feilmelding: intlHelper(intl, constructIntlValidationErrorKey(error, fieldName, formName)),
    };
    return feil;
};
