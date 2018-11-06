const maxSum = require('./maxSum');
const sampleSet = {
    3: [2,6,9,2,1,8,5,6,3],
    5: [1,2,3,70,20,10,1,25,69]
}

describe('Max Sum', () => {
    it('should export a function', () => {
        expect(typeof maxSum).toEqual('function');
    });

    it('should return false when the range is bigger than the array itself', () => {
        expect(maxSum([1], 3)).toEqual(false);
    });

    it('should return 19 for the first data set with a range of three', () => {
        expect(maxSum(sampleSet[3], 3)).toEqual(19);
    });

    it('should return 126 for the second data set with a range of 5', () => {
        expect(maxSum(sampleSet[5],5)).toEqual(126);
    });

});