import { IntlShape } from 'react-intl';
import { parse } from 'iso8601-duration';
import { Time } from '../types/Time';
import intlHelper from './intlUtils';

export const timeToIso8601Duration = ({ hours, minutes }: Partial<Time>): string => {
    return `PT${hours || 0}H${minutes || 0}M`;
};

export const iso8601DurationToTime = (duration: string): Partial<Time> | undefined => {
    const parts = parse(duration);

    return parts
        ? {
              hours: parts.hours,
              minutes: parts.minutes,
          }
        : undefined;
};

export const decimalTimeToTime = (time: number): Time => {
    const hours = Math.floor(time);
    const minutes = Math.round(60 * (time % 1));
    return {
        hours,
        minutes,
    };
};

export const timeToDecimalTime = (time: Time): number => {
    const hours: number = typeof time.hours === 'string' ? parseInt(time.hours, 10) : time.hours;
    const minutes: number = typeof time.minutes === 'string' ? parseInt(time.minutes, 10) : time.minutes;
    return (hours || 0) + ((100 / 60) * (minutes || 0)) / 100;
};

export const isValidTime = (time: Partial<Time> | undefined): time is Time => {
    return (
        time !== undefined &&
        time.hours !== undefined &&
        (typeof time.hours === 'string' || !isNaN(time.hours)) &&
        time.minutes !== undefined &&
        (typeof time.minutes === 'string' || !isNaN(time.minutes)) &&
        time.minutes < 60
    );
};

/**
 *
 * @param time Time
 * @param intl intlShape
 * @param hideZeroMinutes do not print minutes if 0 minutes
 */
export const timeToString = (time: Time, intl: IntlShape, hideZeroMinutes?: boolean): string => {
    if (hideZeroMinutes && time.minutes === 0) {
        return intlHelper(intl, 'timer', { timer: time.hours });
    }
    return intlHelper(intl, 'timerOgMinutter', { timer: time.hours, minutter: time.minutes });
};
