import { IntlShape } from 'react-intl';
import { FeiloppsummeringFeil } from 'nav-frontend-skjema';
import intlHelper from '../utils/intlUtils';

export const constructIntlValidationErrorKey = (error: string, fieldName: string): string =>
    `validation.${fieldName}.${error}`;

export const getFieldErrorRenderer = (intl: IntlShape) => (error: string, fieldName: string) => {
    return intlHelper(intl, constructIntlValidationErrorKey(error, fieldName));
};

export const getSummaryFieldErrorRenderer = (intl: IntlShape) => (error: string, fieldName: string) => {
    const feil: FeiloppsummeringFeil = {
        skjemaelementId: fieldName,
        feilmelding: intlHelper(intl, constructIntlValidationErrorKey(error, fieldName)),
    };
    return feil;
};
