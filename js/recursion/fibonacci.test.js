const fibonacci = require('./fibonacci');

describe('Fibonacci solver', () => {
    it('should export a function', () => {
        expect(typeof fibonacci).toEqual('function');
    });

    it('should return the fibonacci number at nth place', () => {
        expect(fibonacci(18)).toEqual(2584);
    });

    it('should return the fibonacci number at nth place', () => {
        expect(fibonacci(10)).toEqual(55);
    });

    it('should return the fibonacci number at nth place', () => {
        expect(fibonacci(4)).toEqual(3);
    });
});