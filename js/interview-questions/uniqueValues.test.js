const uniqueValues = require('./uniqueValues');
const sample = [1,1,1,1,2,2,2,2,4,4,4,4,5,5,5,5,8,8,8,9,9,9,100];
const simpleCheck = [1];

describe('uniqueValues', () => {
    it('should export a function', () => {
        expect(typeof uniqueValues).toEqual('function');
    });

    it('should return 1 for the simple check', () => {
        expect(uniqueValues(simpleCheck)).toEqual(1);
    });

    it('should return 7 for our sample data set', () => {
        expect(uniqueValues(sample)).toEqual(7);
    })
});

