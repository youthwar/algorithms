const collectOddValues = require('./collectOddValues');

describe('Collecting odd values recursive', () => {

    it('should export function', () => {
        expect(typeof collectOddValues).toEqual('function');
    });

    it('should return an array of odd numbers from an array', () => {
        expect(collectOddValues([1,3,4,5,6,7,8,9,10,11])).toEqual([1, 3, 5, 7, 9, 11]);
    });

});