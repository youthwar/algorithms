const countdown = require('./countdown');

describe('countdown recursively', () => {

    it('should export a function', () => {
        expect(typeof countdown).toEqual('function');
    });

    it('should count down to the nth number', () => {
        expect(countdown(10));
    });

});