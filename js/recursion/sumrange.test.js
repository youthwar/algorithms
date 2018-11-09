const sumrange = require('./sumrange');

describe('sumrange', () => {
    it ('should export a function', () => {
        expect(typeof sumrange).toEqual('function');
    });

    it('should calculate everydigit up until n ', () => {
        expect(sumrange(10)).toEqual(55);
    });
});