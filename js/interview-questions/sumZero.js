// A function that returns the first set of numbers whose sum === 0;
// * Caveat to this is that the array must be sorted.

const sumZero = (arr) => {
    // the smallest number index in our array | Smallest Value
    let leftPointer = 0;
    // the biggest number index in our array | Biggest Value
    let rightPointer = arr.length -1;

    // keep looping as long as left is less then right ( working from outside in)
    while(leftPointer < rightPointer) {
        // add these together and we are checking for 0
        let sum = arr[leftPointer] + arr[rightPointer];
        // found the answer here
        if (sum  === 0) return [arr[leftPointer], arr[rightPointer]];
        // if the sum is greater than zero we need to move the right one pointer to the left
        if (sum > 0) {
            rightPointer--;
        }

        if (sum < 0) {
            leftPointer++;
        }
    }

    return false;
};

module.exports = sumZero;