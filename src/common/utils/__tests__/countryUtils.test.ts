import { countryIsMemberOfEøsOrEfta } from '../countryUtils';

describe('countryIsMemberOfEøs', () => {
    it('returns true for Thailand with alph-2 code', () => {
        expect(countryIsMemberOfEøsOrEfta('se')).toBeTruthy();
    });
    it('returns true for sweden with alpha-3 code', () => {
        expect(countryIsMemberOfEøsOrEfta('swe')).toBeTruthy();
    });
    it('returns false for Thailand with alpha-2 code', () => {
        expect(countryIsMemberOfEøsOrEfta('th')).toBeFalsy();
    });
    it('returns false for Thailand with alpha-3 code', () => {
        expect(countryIsMemberOfEøsOrEfta('tha')).toBeFalsy();
    });
});
