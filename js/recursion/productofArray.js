const productofArray = (arr) => {
    if (arr.length === 0) return 1;

    return arr[0] * productofArray(arr.slice(1));
};

module.exports = productofArray;