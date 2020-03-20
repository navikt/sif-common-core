import moment from 'moment';
import {
    date3YearsAgo, DateRange, dateRangesCollide, dateRangesExceedsRange,
    dateRangesHasFromDateEqualPreviousRangeToDate, formatDateToApiFormat, isMoreThan3YearsAgo,
    prettifyDate
} from '../dateUtils';

const mockedDate = moment('20111031', 'YYYYMMDD').toDate();

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
            const dateMoreThan3YearsAgo = moment(date3YearsAgo).clone();
            dateMoreThan3YearsAgo.subtract(1, 'day');
            expect(isMoreThan3YearsAgo(dateMoreThan3YearsAgo.toDate())).toBe(true);
        });

        it('should return false if date is less or equal to date 3 years ago ', () => {
            expect(isMoreThan3YearsAgo(moment(date3YearsAgo).toDate())).toBe(false);
            expect(isMoreThan3YearsAgo(moment().toDate())).toBe(false);
        });
    });

    describe('dateRangesOverlap', () => {
        const validRanges: DateRange[] = [
            {
                from: moment()
                    .add(5, 'weeks')
                    .toDate(),
                to: moment()
                    .add(6, 'week')
                    .toDate()
            },
            {
                from: moment().toDate(),
                to: moment()
                    .add(1, 'week')
                    .toDate()
            },
            {
                from: moment()
                    .add(2, 'weeks')
                    .toDate(),
                to: moment()
                    .add(3, 'week')
                    .toDate()
            }
        ];
        it('should return false when no overlap exists', () => {
            expect(dateRangesCollide(validRanges)).toBeFalsy();
        });

        it('should detect overlap when it exists', () => {
            const ranges: DateRange[] = [
                // ...validRanges,
                {
                    from: moment()
                        .add(1, 'day')
                        .toDate(),
                    to: moment()
                        .add(1, 'week')
                        .toDate()
                },
                {
                    from: moment()
                        .add(1, 'week')
                        .toDate(),
                    to: moment()
                        .add(2, 'week')
                        .toDate()
                }
            ];
            expect(dateRangesCollide(ranges, false)).toBeTruthy();
        });
    });

    describe('dateRangesExceedsRange', () => {
        const range = {
            from: moment().toDate(),
            to: moment()
                .add(2, 'week')
                .toDate()
        };

        const ranges: DateRange[] = [
            {
                from: moment().toDate(),
                to: moment()
                    .add(1, 'week')
                    .toDate()
            }
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
                            from: moment()
                                .subtract(2, 'day')
                                .toDate(),
                            to: moment()
                                .subtract(1, 'day')
                                .toDate()
                        }
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
                            from: moment()
                                .add(3, 'weeks')
                                .toDate(),
                            to: moment()
                                .add(4, 'weeks')
                                .toDate()
                        }
                    ],
                    range
                )
            ).toBeTruthy();
        });
    });

    describe('dateRangesHasFromDateEqualPreviousRangeToDate', () => {
        const validRanges: DateRange[] = [
            {
                from: moment()
                    .add(5, 'weeks')
                    .toDate(),
                to: moment()
                    .add(6, 'week')
                    .toDate()
            },
            {
                from: moment().toDate(),
                to: moment()
                    .add(1, 'week')
                    .toDate()
            },
            {
                from: moment()
                    .add(2, 'weeks')
                    .toDate(),
                to: moment()
                    .add(3, 'week')
                    .toDate()
            }
        ];

        it('is should return false when a dateRange does not have from-date equal another dateRanges to-date', () => {
            expect(dateRangesHasFromDateEqualPreviousRangeToDate(validRanges)).toBeFalsy();
        });

        it('is should return true if a dateRange starts on det end-date of another dateRange', () => {
            const range: DateRange = { ...validRanges[2] };
            const invalidRange = {
                from: moment(range.to).toDate(),
                to: moment(range.to)
                    .add(1, 'day')
                    .toDate()
            };

            expect(dateRangesHasFromDateEqualPreviousRangeToDate([...validRanges, invalidRange])).toBeTruthy();
        });
    });
});
