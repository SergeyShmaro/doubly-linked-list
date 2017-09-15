const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this.length = 0;
        this._tail = null;
    }

    append(data) {
        if (this.isEmpty()) {
            this._head = new Node(data, null, null);
            this._tail = this._head;
            this.length++;
        } else {
            this._tail.next = new Node(data, this._tail, null);
            this._tail = this._tail.next;
            this.length++;
        }
        return this;
    }

    head() {
        if (this._head) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (this._tail) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    nodeAt(index) {
        let current = this._head;
        while (index > 0) {
            current = current.next;
            index--;
        }
        return current;
    }

    at(index) {
        return this.nodeAt(index).data;
    }

    insertAt(index, data) {
        if (this.isEmpty()) {
            this.append(data);
        } else {
            const current = this.nodeAt(index);
            const prev = current.prev;
            const addNode = new Node(data, prev, current);
            current.prev = addNode;
            prev.next = addNode;
            this.length++;
        }
        return this;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        const current = this.nodeAt(index);
        if (!this.isEmpty){
            this.length--;
        }
        if (current.prev) {
            current.prev.next = current.next;
        }
        if (current.next) {
            current.next.prev = current.prev;
        }
        return this;
    }

    reverse() {
        let temp;
        let current = this._head;
        for (let i = 0; i < this.length; i++) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        for (let i = 0; i < this.length; i++) {
            if (current.data === data) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
