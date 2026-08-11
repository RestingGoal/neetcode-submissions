class MinStack {
    constructor() {
        this.stack = []
        this.minstack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(val, this.minstack.length == 0 ? 
        val : this.minstack[this.minstack.length - 1])

        this.minstack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minstack.pop();
        /* Its important to pop from minstack too to keep the number of values in   both stacks in sync.
        
        stack:     [5, 3, 7, 2]
        minStack:  [5, 3, 3, 2]

        Pop 1
        stack:     [5, 3, 7]
        minStack:  [5, 3, 3]

        Pop 2
        stack:     [5, 3]
        minStack:  [5, 3]
     */
    }

    /**
     * @return {number}
     */
    top() {return this.stack[this.stack.length - 1];}

    /**
     * @return {number}
     */
    getMin() {return this.minstack[this.minstack.length - 1];}
}
