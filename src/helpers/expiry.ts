import { expiryAmounts } from '../constants/expiry';
import { ExpiryTimeUnit } from '../types';

export const getExpiryInWeeks = (amount: number, expiryTimeUnit: ExpiryTimeUnit): number => {
    const minutesInWeek = 60 * 24 * 7;

    const expiryInMs = expiryAmounts[expiryTimeUnit] * amount;
    const expiryInWeeks = expiryInMs / (minutesInWeek * 60000);

    return Math.round(expiryInWeeks * 10000) / 10000;
};

export const getExpiryTranslation = (expiryTimeUnit: ExpiryTimeUnit): string => {
    switch (expiryTimeUnit) {
        case ExpiryTimeUnit.minutes:
            return 'minutes';
        case ExpiryTimeUnit.hours:
            return 'hours';
        case ExpiryTimeUnit.days:
            return 'days';
        case ExpiryTimeUnit.weeks:
            return 'weeks';
        default:
            return '';
    }
};
