import moment from 'moment';
import { ApiStringDate, apiDateFormat } from '../types/ApiStringDate';

const prettyDateFormat = 'DD.MM.YYYY';
const prettyDateFormatExtended = 'DD. MMM YYYY';

export const formatDateToApiFormat = (date: Date): ApiStringDate => {
    const apiFormattedDate = moment(date).format(apiDateFormat);
    return apiFormattedDate;
};
export const prettifyDate = (date: Date): string => moment(date).format(prettyDateFormat);
export const prettifyDateExtended = (date: Date) => moment(date).format(prettyDateFormatExtended);

export const apiStringDateToDate = (date: ApiStringDate): Date => moment.utc(date, apiDateFormat).toDate();

export const isMoreThan3YearsAgo = (date: Date) => moment(date).isBefore(date3YearsAgo);

export const dateToISOFormattedDateString = (date?: Date) =>
    date ? moment.utc(date).format(apiDateFormat) : undefined;

export const date10MonthsAgo = moment().subtract(10, 'months').startOf('day').toDate();

export const date1YearAgo = moment().subtract(1, 'years').startOf('day').toDate();

export const date4YearsAgo = moment().subtract(4, 'years').startOf('day').toDate();

export const date3YearsAgo = moment().subtract(3, 'years').startOf('day').toDate();

export const date4WeeksAgo = moment().subtract(4, 'weeks').startOf('day').toDate();

export const date1YearFromNow = moment().add(1, 'years').endOf('day').toDate();

export const dateToday = moment().toDate();

export const sortDateRange = (d1: DateRange, d2: DateRange): number => {
    if (moment(d1.from).isSameOrBefore(d2.from)) {
        return -1;
    }
    return 1;
};
export const sortOpenDateRange = (d1: OpenDateRange, d2: OpenDateRange): number => {
    if (moment(d1.from).isSameOrBefore(d2.from)) {
        return -1;
    }
    return 1;
};

export interface DateRange {
    from: Date;
    to: Date;
}

export interface OpenDateRange {
    from: Date;
    to?: Date;
}

export const dateRangesCollide = (ranges: DateRange[], fromDateCanBeSameAsPreviousToDate?: boolean): boolean => {
    if (ranges.length > 0) {
        const sortedDates = ranges.sort(sortDateRange);
        const hasOverlap = ranges.find((d, idx) => {
            if (idx < sortedDates.length - 1) {
                if (fromDateCanBeSameAsPreviousToDate) {
                    return moment(d.to).isAfter(sortedDates[idx + 1].from);
                } else {
                    return moment(d.to).isSameOrAfter(sortedDates[idx + 1].from);
                }
            }
            return false;
        });
        return hasOverlap !== undefined;
    }
    return false;
};

export const datesCollideWithDateRanges = (dates: Date[], ranges: DateRange[]): boolean => {
    if (ranges.length > 0 && dates.length > 0) {
        return dates.some((d) => {
            return ranges.some((range) => moment(d).isSameOrAfter(range.from) && moment(d).isSameOrBefore(range.to));
        });
    }
    return false;
};

export const dateRangesHasFromDateEqualPreviousRangeToDate = (ranges: DateRange[]): boolean => {
    if (ranges.length > 0) {
        const sortedDates = ranges.sort(sortDateRange);
        const hasStartDateEqualPreviousRangeToDate = ranges.find((d, idx) => {
            if (idx > 0) {
                return moment(d.from).isSame(sortedDates[idx - 1].to, 'day');
            }
            return false;
        });
        return hasStartDateEqualPreviousRangeToDate !== undefined;
    }
    return false;
};

export const dateRangesExceedsRange = (ranges: DateRange[], allowedRange: DateRange): boolean => {
    if (ranges.length === 0) {
        return false;
    }
    const sortedRanges = ranges.sort(sortDateRange);
    const from = sortedRanges[0].from;
    const to = sortedRanges[sortedRanges.length - 1].to;

    if (
        !moment(from).isBetween(allowedRange.from, allowedRange.to, 'day', '[]') ||
        !moment(to).isBetween(allowedRange.from, allowedRange.to, 'day', '[]')
    ) {
        return true;
    }
    return false;
};

interface ItemWithFomTom {
    fom: Date;
    tom: Date;
}

interface ItemWithFom {
    fom: Date;
}

export const sortItemsByFomTom = (a: ItemWithFomTom, b: ItemWithFomTom) =>
    sortDateRange({ from: a.fom, to: a.fom }, { from: b.fom, to: b.tom });

export const sortItemsByFom = (a: ItemWithFom, b: ItemWithFom) => sortOpenDateRange({ from: a.fom }, { from: b.fom });
