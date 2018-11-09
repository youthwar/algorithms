const factorial = require('./factorial');

describe('recursive factorials', () => {
    it('should export a function', () => {
        expect(typeof factorial).toEqual('function')
    });

    it('should calculate factorials properly', () => {
        expect(factorial(5)).toEqual(120);
    });

    it('should return 1 when one is passed in ', () => {
        expect(factorial(1)).toEqual(1);
    });
});