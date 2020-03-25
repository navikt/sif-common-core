import { YesOrNo } from '../types/YesOrNo';
import { hasValue } from '../validation/hasValue';
import { FieldValidationResult } from '../validation/types';
import { erGyldigNorskOrgnummer } from './erGyldigNorskOrgnummer';
import { fødselsnummerIsValid, FødselsnummerValidationErrorReason } from './fødselsnummerValidator';

export enum FieldValidationErrors {
    'påkrevd' = 'common.fieldvalidation.påkrevd',
    'fødselsnummer_11siffer' = 'common.fieldvalidation.fødselsnummer.11siffer',
    'fødselsnummer_ugyldig' = 'common.fieldvalidation.fødselsnummer.ugyldig',
    'orgnum_ugyldig' = 'common.fieldvalidation.orgnum.ugyldig',
    'tall_ugyldig' = 'common.fieldvalidation.tall_ugyldig',
    'tall_for_lavt' = 'common.fieldvalidation.tall_for_lavt',
    'tall_for_høyt' = 'common.fieldvalidation.tall_for_høyt',
    'tall_ikke_innenfor_min_maks' = 'common.fieldvalidation.tall_ikke_innenfor_min_maks'
}

export const fieldIsRequiredError = () => createFieldValidationError(FieldValidationErrors.påkrevd);

export const validateFødselsnummer = (v: string): FieldValidationResult => {
    const [isValid, reasons] = fødselsnummerIsValid(v);
    if (!isValid) {
        if (reasons.includes(FødselsnummerValidationErrorReason.MustConsistOf11Digits)) {
            return createFieldValidationError(FieldValidationErrors.fødselsnummer_11siffer);
        } else {
            return createFieldValidationError(FieldValidationErrors.fødselsnummer_ugyldig);
        }
    }
};

export const validateYesOrNoIsAnswered = (answer: YesOrNo): FieldValidationResult => {
    if (answer === YesOrNo.UNANSWERED || answer === undefined) {
        return fieldIsRequiredError();
    }
    return undefined;
};

export const validateRequiredField = (value: any): FieldValidationResult => {
    if (!hasValue(value)) {
        return fieldIsRequiredError();
    }
    return undefined;
};

export const validateRequiredList = (value: any): FieldValidationResult => {
    if (!hasValue(value) || value?.length === 0) {
        return fieldIsRequiredError();
    }
    return undefined;
};

export const validateRequiredSelect = (value: any): FieldValidationResult => {
    if (!hasValue(value)) {
        return fieldIsRequiredError();
    }
    return undefined;
};

export const createFieldValidationError = <T extends string>(
    key: T | undefined,
    values?: any
): FieldValidationResult => {
    return key
        ? {
              key,
              values
          }
        : undefined;
};

export const validateOrgNumber = (orgnum: string, isNorwegian: boolean): FieldValidationResult => {
    if (isNorwegian) {
        if (!erGyldigNorskOrgnummer(orgnum)) {
            return { key: FieldValidationErrors.orgnum_ugyldig };
        }
        return undefined;
    }
    return validateRequiredField(orgnum);
};

export const validateRequiredNumber = ({ min, max }: { min?: number; max?: number }) => (
    value: number
): FieldValidationResult => {
    if (!hasValue(value)) {
        return fieldIsRequiredError();
    }
    if (isNaN(value)) {
        return createFieldValidationError(FieldValidationErrors.tall_ugyldig);
    }
    if (min !== undefined && max !== undefined) {
        if (value < min || value > max) {
            return createFieldValidationError(FieldValidationErrors.tall_ikke_innenfor_min_maks, { min, max });
        }
    }
    if (min !== undefined && value < min) {
        return createFieldValidationError(FieldValidationErrors.tall_for_lavt, { min });
    }
    if (max !== undefined && value > max) {
        return createFieldValidationError(FieldValidationErrors.tall_for_høyt, { maks: max });
    }
    return undefined;
};
