// Another multiple pointer pattern question
const countUniqueValues = (arr) => {
    let i = 0;
    if (arr.length <= 1) return arr.length;
    
    for( let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

module.exports = countUniqueValues;