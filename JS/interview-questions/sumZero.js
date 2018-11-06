// A function that returns the first set of numbers whose sum === 0;
// * Caveat to this is that the array must be sorted.

const sumZero = (arr) => {
    let leftPointer = 0;
    let rightPointer = arr.length -1;

    while(leftPointer < rightPointer) {
        let sum = arr[leftPointer] + arr[rightPointer];
        
        // if sum is 0 we arrived our answer
        if (sum === 0) return [arr[leftPointer], arr[rightPointer]];
        if (sum < 0) {
            leftPointer++;
        }
        if (sum > 0) {
            rightPointer--;
        }
    }

    return false;
};

module.exports = sumZero;