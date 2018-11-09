// O(n)
class LinearSearch {
    constructor() {
        this.data = [];
    }

    insert(arr) {
        this.data = this.data.concat(arr);
        return this.data;
    }

    search(pattern) {
        for(let i = 0; i < this.data.length; i++) {
            if (this.data[i] === pattern) {
                return i;
            }
        }

        return -1;
    }
};

module.exports = LinearSearch;
