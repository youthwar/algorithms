// O(log n) best case O(1)

const baseSearch = require('./linearSearch');

class BinarySearch extends baseSearch {
    constructor() {
        super();
    }

    _sort() {
        this.data = this.data.sort((a,b) => a - b);
        return this.data;
    }

    insert(arr) {
        this.data = this.data.concat(arr);
        return this._sort();
    }

    calculateMiddle(start, end) {
        return Math.floor((start + end) / 2);
    }

    search(item) {
        let start = 0;
        let end = this.data.length - 1;
        let middle = this.calculateMiddle(start, end);

        while(this.data[middle] !== item && start <= end ) {
            if (item < this.data[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }

            middle = this.calculateMiddle(start, end);
        }

        return this.data[middle] === item ? middle : -1;
    }
}

module.exports = BinarySearch;