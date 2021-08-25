import dayjs from 'dayjs';
import {
    date3YearsAgo,
    DateRange,
    dateRangesCollide,
    dateRangesExceedsRange,
    dateRangesHasFromDateEqualPreviousRangeToDate,
    datesCollideWithDateRanges,
    formatDateToApiFormat,
    isMoreThan3YearsAgo,
    prettifyDate,
} from '../dateUtils';

const mockedDate = dayjs('20111031', 'YYYYMMDD').toDate();

describe('dateUtils', () => {
    describe('formatDateToApiFormat', () => {
        it('should format provided date on correct format for API', () => {
            expect(formatDateToApiFormat(mockedDate)).toEqual('2011-10-31');
        });
    });

    describe('prettifyDate', () => {
        it('should format provided date in a readable format', () => {
            expect(prettifyDate(mockedDate)).toEqual('31.10.2011');
        });
    });

    describe('isMoreThan3YearsAgo', () => {
        it('should return true if date is more than 3 years back in time', () => {
            const dateMoreThan3YearsAgo = dayjs(date3YearsAgo).subtract(1, 'day').toDate();
            expect(isMoreThan3YearsAgo(dateMoreThan3YearsAgo)).toBe(true);
        });

        it('should return false if date is less or equal to date 3 years ago ', () => {
            expect(isMoreThan3YearsAgo(dayjs(date3YearsAgo).toDate())).toBe(false);
            expect(isMoreThan3YearsAgo(dayjs().toDate())).toBe(false);
        });
    });

    describe('dateRangesOverlap', () => {
        const validRanges: DateRange[] = [
            {
                from: dayjs().add(5, 'week').toDate(),
                to: dayjs().add(6, 'week').toDate(),
            },
            {
                from: dayjs().toDate(),
                to: dayjs().add(1, 'week').toDate(),
            },
            {
                from: dayjs().add(2, 'week').toDate(),
                to: dayjs().add(3, 'week').toDate(),
            },
        ];
        it('should return false when no overlap exists', () => {
            expect(dateRangesCollide(validRanges)).toBeFalsy();
        });

        it('should detect overlap when it exists', () => {
            const date = new Date(2020, 0, 1);
            const ranges: DateRange[] = [
                ...validRanges,
                {
                    from: dayjs(date).add(1, 'day').toDate(),
                    to: dayjs(date).add(1, 'week').toDate(),
                },
                {
                    from: dayjs(date).add(1, 'week').toDate(),
                    to: dayjs(date).add(2, 'week').toDate(),
                },
            ];
            expect(dateRangesCollide(ranges)).toBeTruthy();
        });
    });

    describe('dateRangesExceedsRange', () => {
        const range = {
            from: dayjs().toDate(),
            to: dayjs().add(2, 'week').toDate(),
        };

        const ranges: DateRange[] = [
            {
                from: dayjs().toDate(),
                to: dayjs().add(1, 'week').toDate(),
            },
        ];

        it('should return false if ranges are within valid range', () => {
            expect(dateRangesExceedsRange(ranges, range)).toBeFalsy();
        });
        it('should return true if ranges are ahead of valid range', () => {
            expect(
                dateRangesExceedsRange(
                    [
                        ...ranges,
                        {
                            from: dayjs().subtract(2, 'day').toDate(),
                            to: dayjs().subtract(1, 'day').toDate(),
                        },
                    ],
                    range
                )
            ).toBeTruthy();
        });
        it('should return true if ranges are after valid range', () => {
            expect(
                dateRangesExceedsRange(
                    [
                        ...ranges,
                        {
                            from: dayjs().add(3, 'week').toDate(),
                            to: dayjs().add(4, 'week').toDate(),
                        },
                    ],
                    range
                )
            ).toBeTruthy();
        });
    });

    describe('dateRangesHasFromDateEqualPreviousRangeToDate', () => {
        const validRanges: DateRange[] = [
            {
                from: dayjs().add(5, 'week').toDate(),
                to: dayjs().add(6, 'week').toDate(),
            },
            {
                from: dayjs().toDate(),
                to: dayjs().add(1, 'week').toDate(),
            },
            {
                from: dayjs().add(2, 'week').toDate(),
                to: dayjs().add(3, 'week').toDate(),
            },
        ];

        it('is should return false when a dateRange does not have from-date equal another dateRanges to-date', () => {
            expect(dateRangesHasFromDateEqualPreviousRangeToDate(validRanges)).toBeFalsy();
        });

        it('is should return true if a dateRange starts on det end-date of another dateRange', () => {
            const range: DateRange = { ...validRanges[2] };
            const invalidRange = {
                from: dayjs(range.to).toDate(),
                to: dayjs(range.to).add(1, 'day').toDate(),
            };

            expect(dateRangesHasFromDateEqualPreviousRangeToDate([...validRanges, invalidRange])).toBeTruthy();
        });
    });

    describe('datesCollideWithDateRanges', () => {
        const date1 = dayjs().add(1, 'day').toDate();
        const date2 = dayjs().add(2, 'day').toDate();
        const date3 = dayjs().add(3, 'day').toDate();

        const dateRanges: DateRange[] = [
            {
                from: date1,
                to: date2,
            },
        ];

        it('should return false if dates or dateRanges is empty', () => {
            expect(datesCollideWithDateRanges([], [])).toBeFalsy();
            expect(datesCollideWithDateRanges([new Date()], [])).toBeFalsy();
            expect(datesCollideWithDateRanges([], [{ from: new Date(), to: new Date() }])).toBeFalsy();
        });

        it('should return false if all dates are outside the dateRanges', () => {
            expect(datesCollideWithDateRanges([date3], dateRanges)).toBeFalsy();
        });
        it('should return true if one of the dates are within one of the dateRanges', () => {
            expect(datesCollideWithDateRanges([date2], dateRanges)).toBeTruthy();
        });
    });
});
