import { IntlShape } from 'react-intl';
import { NavFrontendSkjemaFeil } from '../types/NavFrontendSkjemaFeil';
import { isFieldValidationError } from '../validation/fieldValidationRenderUtils';

export const commonFieldErrorRenderer = (intl: IntlShape, error: any): NavFrontendSkjemaFeil => {
    if (isFieldValidationError(error)) {
        return intl.formatMessage({ id: error.key }, error.values);
    }
    if (typeof error === 'string') {
        return error;
    }
    return error !== undefined;
};
