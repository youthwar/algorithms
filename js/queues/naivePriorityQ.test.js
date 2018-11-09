const q = require('./naivePriorityQ');

describe('Naive Priority Q', () => {
    let Q;
    beforeAll(() => {
        Q = new q();
    }); 

    it('should export a class', () => {
        expect(typeof q).toEqual('function');
    });

    it('should enqueue in the proper position', () => {
        expect(Q.enqueue('kelsey', 3)).toEqual([{val: 'kelsey', priority: 3 }]);
        expect(Q.enqueue('max', 2)).toEqual([{val: 'max', priority: 2}, {val: 'kelsey', priority: 3}]);
    });

    it('should dequeue from the beginging of the list', () => {
        expect(Q.dequeue()).toEqual({val: 'max', priority: 2});
    });

});