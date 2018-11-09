const sumZero = require('./sumZero');
const sortedArray = [-3,-2,-1,0,1,2,3,4];
const noAnswer = [-2,-1,0,3];

describe('Sum Zero function', () => {
    it('should return a function', () => {
        expect(typeof sumZero === 'function').toBe(true);
    });

    it('should return -3,3 for the sorted array', () => {
        expect(sumZero(sortedArray)).toEqual([-3,3]);
    });

    it('should return false for the array with no pairs', () => {
        expect(sumZero(noAnswer)).toBe(false);
    });

});