const power = (n, exp) => {
    if(exp === 0) return 1;
    return n * power(n, exp - 1); 
}

module.exports = power;
