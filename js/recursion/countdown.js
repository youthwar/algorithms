
const countdown = (final) => {
    if (final <= 0) return 'all done';
    console.log(final);
    final--;
    countdown(final);
};

module.exports = countdown;