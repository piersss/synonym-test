import { getExpiryTranslation } from '../../../helpers/expiry';
import { ExpiryTimeUnit, FormOption } from '../../../types';

export const getExpiryTimeUnitOptions = (): FormOption[] => [
    {
        label: getExpiryTranslation(ExpiryTimeUnit.minutes),
        value: ExpiryTimeUnit.minutes,
    },
    {
        label: getExpiryTranslation(ExpiryTimeUnit.hours),
        value: ExpiryTimeUnit.hours,
    },
    {
        label: getExpiryTranslation(ExpiryTimeUnit.days),
        value: ExpiryTimeUnit.days,
    },
    {
        label: getExpiryTranslation(ExpiryTimeUnit.weeks),
        value: ExpiryTimeUnit.weeks,
    },
];

export const transformToExpiryTimeUnit = (value: string): ExpiryTimeUnit => {
    if (value === ExpiryTimeUnit.minutes) {
        return ExpiryTimeUnit.minutes;
    }

    if (value === ExpiryTimeUnit.hours) {
        return ExpiryTimeUnit.hours;
    }

    if (value === ExpiryTimeUnit.days) {
        return ExpiryTimeUnit.days;
    }

    return ExpiryTimeUnit.weeks;
};
