import {
    getDateRangesAfterDate,
    getNextDateAfterDate,
    getNextDateInDateRangesAfterDate,
    getMaxDateForDateInDateIntervalPicker,
} from '../dateIntervalPickerUtils';
import { apiStringDateToDate, DateRange, formatDateToApiFormat } from '../dateUtils';

const dateRanges: DateRange[] = [
    {
        from: apiStringDateToDate('2020-03-14'),
        to: apiStringDateToDate('2020-03-16'),
    },
    {
        from: apiStringDateToDate('2020-01-01'),
        to: apiStringDateToDate('2020-01-05'),
    },
    {
        from: apiStringDateToDate('2020-02-01'),
        to: apiStringDateToDate('2020-02-05'),
    },
    {
        from: apiStringDateToDate('2020-03-01'),
        to: apiStringDateToDate('2020-03-05'),
    },
    {
        from: apiStringDateToDate('2020-04-01'),
        to: apiStringDateToDate('2020-04-05'),
    },
];

describe('dateIntervalPickerUtils', () => {
    describe('getDateRangesAfterDate', () => {
        it('returns correct ranges after spesific date', () => {
            const fromDate = apiStringDateToDate('2020-02-02');
            const ranges = getDateRangesAfterDate(fromDate, dateRanges);
            expect(ranges.length).toBe(3);
            expect(formatDateToApiFormat(ranges[0].from)).toEqual('2020-03-14');
            expect(formatDateToApiFormat(ranges[1].from)).toEqual('2020-03-01');
            expect(formatDateToApiFormat(ranges[2].from)).toEqual('2020-04-01');
        });
        it('returns empty array if no ranges are after date', () => {
            const fromDate = apiStringDateToDate('2020-05-02');
            const ranges = getDateRangesAfterDate(fromDate, dateRanges);
            expect(ranges.length).toBe(0);
        });
    });
    describe('getNextDateAfterDate', () => {
        it('returns first date in dates, after spesified date', () => {
            const dates = dateRanges.map((d) => d.from);
            const date = apiStringDateToDate('2020-02-08');
            const result = getNextDateAfterDate(date, dates);
            expect(result).toBeDefined();
            expect(formatDateToApiFormat(result!)).toEqual('2020-03-01');
        });
        it('returns undefined if no dates are after spesified date', () => {
            const dates = dateRanges.map((d) => d.to);
            const date = apiStringDateToDate('2020-07-08');
            const result = getNextDateAfterDate(date, dates);
            expect(result).toBeUndefined();
        });
    });
    describe('getNextDateInDateRangesAfterDate', () => {
        it('returns correct next date in dateRanges, after spesified date', () => {
            const date = apiStringDateToDate('2020-02-08');
            const result = getNextDateInDateRangesAfterDate(date, dateRanges);
            expect(formatDateToApiFormat(result!)).toEqual('2020-03-01');
        });
        it('returns undefined it no dateRanges are after spesified date', () => {
            const date = apiStringDateToDate('2020-07-08');
            const result = getNextDateInDateRangesAfterDate(date, dateRanges);
            expect(result).toBeUndefined();
        });
    });
    describe('getMaxDateForDateInDateIntervalPicker', () => {
        const fromDate = apiStringDateToDate('2020-02-08');
        const maxDate = apiStringDateToDate('2020-10-10');
        const toDate = apiStringDateToDate('2020-08-10');

        it('returns maxDate if no other dates are defined', () => {
            const fromDate = apiStringDateToDate('2020-02-08');
            const maxDate = apiStringDateToDate('2020-10-10');
            const result = getMaxDateForDateInDateIntervalPicker({
                fromDate,
                maxDate,
                toDate: undefined,
                dateRanges: undefined,
            });
            expect(formatDateToApiFormat(result!)).toEqual('2020-10-10');
        });
        it('returns toDate if it is the closest following date', () => {
            const result = getMaxDateForDateInDateIntervalPicker({
                fromDate,
                maxDate,
                toDate,
            });
            expect(formatDateToApiFormat(result!)).toEqual('2020-08-10');
        });
        it('returns correct date from dateRanges if it is the closest following date', () => {
            const result = getMaxDateForDateInDateIntervalPicker({
                fromDate,
                maxDate,
                toDate,
                dateRanges,
            });
            expect(formatDateToApiFormat(result!)).toEqual('2020-03-01');
        });
    });
    describe('getDateForDateInDateIntervalPicker', () => {
        const fromDate = apiStringDateToDate('2020-02-08');
        const maxDate = apiStringDateToDate('2020-10-10');
        const toDate = apiStringDateToDate('2020-08-10');

        it('returns maxDate if no other dates are defined', () => {
            const fromDate = apiStringDateToDate('2020-02-08');
            const maxDate = apiStringDateToDate('2020-10-10');
            const result = getMaxDateForDateInDateIntervalPicker({
                fromDate,
                maxDate,
                toDate: undefined,
                dateRanges: undefined,
            });
            expect(formatDateToApiFormat(result!)).toEqual('2020-10-10');
        });
        it('returns toDate if it is the closest following date', () => {
            const result = getMaxDateForDateInDateIntervalPicker({
                fromDate,
                maxDate,
                toDate,
            });
            expect(formatDateToApiFormat(result!)).toEqual('2020-08-10');
        });
        it('returns correct date from dateRanges if it is the closest following date', () => {
            const result = getMaxDateForDateInDateIntervalPicker({
                fromDate,
                maxDate,
                toDate,
                dateRanges,
            });
            expect(formatDateToApiFormat(result!)).toEqual('2020-03-01');
        });
    });
});
