import { ExpiryTimeUnit } from '../types';
import { getExpiryInWeeks } from './expiry';

describe('getExpiryInWeeks', (): void => {
    it('should return expiry in weeks', (): void => {
        const result1 = getExpiryInWeeks(1, ExpiryTimeUnit.weeks);
        const result2 = getExpiryInWeeks(1, ExpiryTimeUnit.days);
        const result3 = getExpiryInWeeks(1, ExpiryTimeUnit.hours);
        const result4 = getExpiryInWeeks(1, ExpiryTimeUnit.minutes);
        const result5 = getExpiryInWeeks(2, ExpiryTimeUnit.minutes);
        const result6 = getExpiryInWeeks(9999, ExpiryTimeUnit.weeks);

        expect(result1).toBe(1);
        expect(result2).toBe(0.1429);
        expect(result3).toBe(0.006);
        expect(result4).toBe(0.0001);
        expect(result5).toBe(0.0002);
        expect(result6).toBe(9999);
    });
});
