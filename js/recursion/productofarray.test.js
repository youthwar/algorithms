const productofArray = require('./productofArray');

describe('Product of array recursively', () => {
    it('should export a function', () => {
        expect(typeof productofArray).toEqual('function');
    });

    it('should calculate the product of all the integers in an array', () => {
        expect(productofArray([1,2,3,10])).toEqual(60);
    });
});