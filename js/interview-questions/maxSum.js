// This is a sliding window pattern
// Give me the max sum of n amount of numbers in the array

const maxSum = (arr, n) => {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < n) return false;

    for(let i = 0; i < n; i++) {
        // calculate the first possible solution
        maxSum += arr[i];
    }
    // start the sliding window
    tempSum = maxSum;
    for (let j = n; j < arr.length; j++) {
        tempSum = tempSum - arr[j - n] + arr[j]
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
};

module.exports = maxSum;
