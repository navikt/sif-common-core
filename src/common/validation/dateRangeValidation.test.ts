import dateRangeValidation, { DateRangeValidationErrorKeys } from './dateRangeValidation';

const date = new Date(2000, 10, 10);
const earlyDate = new Date(1998, 10, 10);
const lateDate = new Date(2010, 10, 10);
const minDate = new Date(1999, 10, 10);
const maxDate = new Date(2001, 10, 10);
const toDate = new Date(2000, 5, 5);

describe('dateRangeValidation', () => {
    it('returns no error if date is undefined', () => {
        expect(dateRangeValidation.validateFromDate(undefined, undefined, undefined, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.isRequired
        );
        expect(dateRangeValidation.validateToDate(undefined, undefined, undefined, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.isRequired
        );
    });
    it('returns no error if min and max date is undefined', () => {
        expect(dateRangeValidation.validateFromDate(date, undefined, undefined, undefined)).toBeUndefined();
        expect(dateRangeValidation.validateToDate(date, undefined, undefined, undefined)).toBeUndefined();
    });
    it('returns dateBeforeMinDate.-error if date is before minDate', () => {
        expect(dateRangeValidation.validateFromDate(date, maxDate, undefined, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateBeforeMinDate
        );
        expect(dateRangeValidation.validateToDate(date, maxDate, undefined, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateBeforeMinDate
        );
    });
    it('returns dateAfterMaxDate-error if date is before minDate', () => {
        expect(dateRangeValidation.validateFromDate(date, undefined, minDate, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateAfterMaxDate
        );
        expect(dateRangeValidation.validateToDate(date, undefined, minDate, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateAfterMaxDate
        );
    });
    it('returns dateOutsideRange-error if date is before the range minDate-maxDate', () => {
        expect(dateRangeValidation.validateFromDate(earlyDate, minDate, maxDate, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateOutsideRange
        );
        expect(dateRangeValidation.validateToDate(earlyDate, minDate, maxDate, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateOutsideRange
        );
    });
    it('returns dateOutsideRange-error if date is after the range minDate-maxDate', () => {
        expect(dateRangeValidation.validateFromDate(lateDate, date, minDate, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateOutsideRange
        );
        expect(dateRangeValidation.validateToDate(lateDate, date, minDate, undefined)?.key).toEqual(
            DateRangeValidationErrorKeys.dateOutsideRange
        );
    });
    it('returns fromDateAfterToDate-error if date is after given toDate', () => {
        expect(dateRangeValidation.validateFromDate(date, minDate, maxDate, toDate)?.key).toEqual(
            DateRangeValidationErrorKeys.fromDateAfterToDate
        );
    });
});
