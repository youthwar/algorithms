
class PriorityQ { 
    constructor() {
        this.values = [];
    }

    sort() {
        this.values = this.values.sort((a,b) => a.priority - b.priority);
    }

    dequeue() {
        return this.values.shift();
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
        return this.values;
    }
}

module.exports = PriorityQ;