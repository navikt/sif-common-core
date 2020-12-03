import dayjs from 'dayjs';
import { prettifyDateExtended } from '../utils/dateUtils';

export enum DateRangeValidationErrorKeys {
    'isRequired' = 'dataRangeValidation.form.validation.required',
    'dateOutsideRange' = 'dataRangeValidation.form.validation.dateOutsideRange',
    'dateBeforeMinDate' = 'dataRangeValidation.form.validation.dateBeforeMinDate',
    'dateAfterMaxDate' = 'dataRangeValidation.form.validation.dateAfterMaxDate',
    'fromDateAfterToDate' = 'dataRangeValidation.form.validation.fromDateAfterToDate',
}

const validateDateInRange = (date: Date | undefined, minDate?: Date, maxDate?: Date) => {
    if (date === undefined) {
        return {
            key: 'dataRangeValidation.form.validation.required',
        };
    }
    if (minDate && maxDate && !dayjs(date).isBetween(minDate, maxDate, 'day', '[]')) {
        return {
            key: 'dataRangeValidation.form.validation.dateOutsideRange',
            values: {
                fom: prettifyDateExtended(minDate),
                tom: prettifyDateExtended(maxDate),
            },
        };
    }
    if (minDate && dayjs(date).isBefore(minDate, 'day')) {
        return {
            key: 'dataRangeValidation.form.validation.dateBeforeMinDate',
            values: {
                fom: prettifyDateExtended(minDate),
            },
        };
    }
    if (maxDate && dayjs(date).isAfter(maxDate, 'day')) {
        return {
            key: 'dataRangeValidation.form.validation.dateAfterMaxDate',
            values: {
                fom: prettifyDateExtended(maxDate),
            },
        };
    }
    return undefined;
};

const validateFromDate = (
    date: Date | undefined,
    minDate: Date | undefined,
    maxDate: Date | undefined,
    toDate?: Date
) => {
    const error = validateDateInRange(date, minDate, maxDate);
    if (error !== undefined) {
        return error;
    }
    if (toDate && dayjs(date).isAfter(toDate, 'day')) {
        return {
            key: 'dataRangeValidation.form.validation.fromDateAfterToDate',
        };
    }
    return undefined;
};

const validateToDate = (
    date: Date | undefined,
    minDate: Date | undefined,
    maxDate: Date | undefined,
    fromDate?: Date
) => {
    const error = validateDateInRange(date, minDate, maxDate);
    if (error !== undefined) {
        return error;
    }
    if (fromDate && dayjs(date).isBefore(fromDate, 'day')) {
        return {
            key: 'dataRangeValidation.form.validation.toDateBeforeFromDate',
        };
    }
    return undefined;
};

const dateRangeValidation = {
    validateToDate,
    validateFromDate,
};

export default dateRangeValidation;
