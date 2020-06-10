import moment from 'moment';
import { DateRange, sortDateRange } from './dateUtils';

export const getDateRangesAfterDate = (date: Date, dateRanges: DateRange[] = []): DateRange[] => {
    return dateRanges.filter((dateRange) => moment(dateRange.from).isAfter(date, 'day'));
};

export const getNextDateAfterDate = (fromDate: Date, dates: Date[]): Date | undefined => {
    const moments = dates.map((d) => moment(d)).filter((m) => m.isAfter(fromDate, 'day'));
    return moments.length > 0 ? moment.min(moments).toDate() : undefined;
};

export const getNextDateInDateRangesAfterDate = (date: Date, dateRanges: DateRange[]): Date | undefined => {
    const rangesAfterFom = getDateRangesAfterDate(date, dateRanges).sort(sortDateRange);
    return rangesAfterFom.length > 0 ? rangesAfterFom[0].from : undefined;
};

export const getMaxDateForDateInDateIntervalPicker = ({
    fromDate,
    toDate,
    maxDate,
    dateRanges = [],
}: {
    fromDate?: Date;
    toDate?: Date;
    maxDate?: Date;
    dateRanges?: DateRange[];
}): Date | undefined => {
    if (!fromDate) {
        return maxDate;
    }
    const rangesAfterFom = getDateRangesAfterDate(fromDate, dateRanges).sort(sortDateRange);
    const dates: Date[] = [
        ...(toDate ? [toDate] : []),
        ...(maxDate ? [maxDate] : []),
        ...(rangesAfterFom.length > 0 ? [rangesAfterFom[0].from] : []),
    ];
    return getNextDateAfterDate(fromDate, dates);
};
