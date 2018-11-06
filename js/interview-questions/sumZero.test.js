const sumZero = require('./sumZero');
const sampleSet = [-5,-4, -3, -2, 0, 1,2,];
const failureSet = [-4,-3,-2, 0, 1,5,6];


describe('Sum Zero', () => {
    it('should export a function', () => {
        expect(typeof sumZero).toEqual('function');
    });

    it('should return the values -2, 2 for the sample set', () => {
        expect(sumZero(sampleSet)).toEqual([-2,2]);
    });

    it('should return false for the failure set where no sums will equal 0', () => {
        expect(sumZero(failureSet)).toEqual(false);
    });
});
