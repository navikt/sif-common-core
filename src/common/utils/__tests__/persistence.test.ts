import { dateStringToDateObjectMapper } from '../persistence/persistence';

const validISODate = '2000-10-10';

describe('persistence', () => {
    describe('storageParser', () => {
        it('does not parse datepicker ISOFormattedDate', () => {
            expect(dateStringToDateObjectMapper('key', validISODate)).toEqual(validISODate);
        });
        it('does parse other dates', () => {
            const date = new Date();
            expect(dateStringToDateObjectMapper('key', date.toString())).toEqual(date.toString());
        });
        it('does not parse other types', () => {
            expect(dateStringToDateObjectMapper('key', 'abc')).toEqual('abc');
            expect(dateStringToDateObjectMapper('key', '1')).toEqual('1');
        });
    });
});
