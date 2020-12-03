import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isBetween from 'dayjs/plugin/isBetween';
import utc from 'dayjs/plugin/utc';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);
dayjs.extend(utc);

import { ApiStringDate, apiDateFormat } from '../types/ApiStringDate';

const prettyDateFormat = 'DD.MM.YYYY';
const prettyDateFormatExtended = 'D. MMM YYYY';
const prettyDateFormatFull = 'D. MMMM YYYY';

export const formatDateToApiFormat = (date: Date): ApiStringDate => {
    const apiFormattedDate = dayjs(date).format(apiDateFormat);
    return apiFormattedDate;
};
export const prettifyDate = (date: Date): string => dayjs(date).format(prettyDateFormat);
export const prettifyDateExtended = (date: Date) => dayjs(date).format(prettyDateFormatExtended);
export const prettifyDateFull = (date: Date) => dayjs(date).format(prettyDateFormatFull);

export const apiStringDateToDate = (date: ApiStringDate): Date => dayjs.utc(date, apiDateFormat).toDate();

export const isMoreThan3YearsAgo = (date: Date) => dayjs(date).isBefore(date3YearsAgo);

export const dateToISOFormattedDateString = (date?: Date) => (date ? dayjs(date).format(apiDateFormat) : undefined);

export const date10MonthsAgo = dayjs().subtract(10, 'month').startOf('day').toDate();

export const date1YearAgo = dayjs().subtract(1, 'year').startOf('day').toDate();

export const date4YearsAgo = dayjs().subtract(4, 'year').startOf('day').toDate();

export const date3YearsAgo = dayjs().subtract(3, 'year').startOf('day').toDate();

export const date4WeeksAgo = dayjs().subtract(4, 'week').startOf('day').toDate();

export const date1YearFromNow = dayjs().add(1, 'year').endOf('day').toDate();

export const dateToday = dayjs().toDate();

export const sortDateRange = (d1: DateRange, d2: DateRange): number => {
    if (dayjs(d1.from).isSameOrBefore(d2.from)) {
        return -1;
    }
    return 1;
};

export const sortDateRangeByToDate = (d1: DateRange, d2: DateRange): number => {
    if (dayjs(d1.to).isSameOrBefore(d2.to)) {
        return -1;
    }
    return 1;
};

export const sortOpenDateRange = (d1: OpenDateRange, d2: OpenDateRange): number => {
    if (dayjs(d1.from).isSameOrBefore(d2.from)) {
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
                    return dayjs(d.to).isAfter(sortedDates[idx + 1].from);
                } else {
                    return dayjs(d.to).isSameOrAfter(sortedDates[idx + 1].from);
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
            return ranges.some((range) => dayjs(d).isSameOrAfter(range.from) && dayjs(d).isSameOrBefore(range.to));
        });
    }
    return false;
};

export const dateRangesHasFromDateEqualPreviousRangeToDate = (ranges: DateRange[]): boolean => {
    if (ranges.length > 0) {
        const sortedDates = ranges.sort(sortDateRange);
        const hasStartDateEqualPreviousRangeToDate = ranges.find((d, idx) => {
            if (idx > 0) {
                return dayjs(d.from).isSame(sortedDates[idx - 1].to, 'day');
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
        !dayjs(from).isBetween(allowedRange.from, allowedRange.to, 'day', '[]') ||
        !dayjs(to).isBetween(allowedRange.from, allowedRange.to, 'day', '[]')
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

export const datoErInnenforTidsrom = (dato: Date, range: Partial<DateRange>): boolean => {
    if (range.from && range.to) {
        return dayjs(dato).isBetween(range.from, range.to, 'day', '[]');
    }
    if (range.from) {
        return dayjs(dato).isSameOrAfter(range.from);
    }
    if (range.to) {
        return dayjs(dato).isSameOrBefore(range.to);
    }
    return true;
};
