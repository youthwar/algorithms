const power = require('./power');

describe('Power recursively', () => {
    it('should export a function', () => {
        expect(typeof power).toEqual('function');
    });

    it('should calculate the power of an interger', () => {
        expect(power(5, 5)).toEqual(3125);
    });
});