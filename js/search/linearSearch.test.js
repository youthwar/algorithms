const linearSearch = require('./linearSearch');

describe('Linear Search', () => {
    let LS;
    const testData = ['Max', 'Cat', 'dog', 'ashanti', 'pistachio', 'kelsey'];

    beforeAll(() => {
        LS = new linearSearch();
    });

    it('should export a class', () => {
        expect(typeof linearSearch).toEqual('function');
    });

    it('should import data properly', () => {
        
        expect(LS.insert(testData)).toEqual(testData);
    });

    testData.forEach((item, i) => {
        it(`should return the proper index for ${item}`, () => {
            expect(LS.search(item)).toEqual(i);
        });
    });

    it('should return -1 for items that are not found in the dataset', () => {
        expect(LS.search('Maximiliano')).toEqual(-1);
    });
});
