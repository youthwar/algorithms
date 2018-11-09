const reverse = require('./reverse');

describe('Reversing a string', () => {
    it('should export a function', () => {
        expect(typeof reverse).toEqual('function');
    });

    it('reverse the string max', () => {
        expect(reverse('max')).toEqual('xam');
    });

    it('reverse a long string with spaces', () => {
        expect(reverse('I like javascript its pretty fun')).toEqual('nuf ytterp sti tpircsavaj ekil I');
    });
});