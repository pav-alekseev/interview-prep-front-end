class MinStack {
    constructor() {
        this.stack = [];
        this.mins = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.getMin() === undefined || val < this.getMin()) {
            this.mins.push(val);
        } else {
            this.mins.push(this.getMin());
        }
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.mins.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.mins[this.mins.length - 1];
    }
}
