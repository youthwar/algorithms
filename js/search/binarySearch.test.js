const BinarySearch = require('./binarySearch');

describe('Binary Search', () => {
    let BS;
    const testData = [4, 2, 6, 9, 0, 12, 19];

    beforeAll(() => {
        BS = new BinarySearch();
    });

    it('should export a class', () => {
        expect(typeof BinarySearch).toEqual('function');
    });

    it('should insert data and sort it', () => {
        expect(BS.insert(testData)).toEqual([0,2,4,6,9,12,19]);
    });

    it('should find a value that is in the data set', () => {
        expect(BS.search(4)).toEqual(2);
    });

    it('should return -1 for a value that is not in the data set', () => {
        expect(BS.search(8)).toEqual(-1);
    });

});
