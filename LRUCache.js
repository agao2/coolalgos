class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.dict = {};
        this.head = null;
        this.tail = null;
    }

    _addNode = (node) => {
        node.next = null;
        node.prev = null;
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    _removeNode = (node) => {
        if (node === this.head) {
            this.head = this.head.next;
            if (this.head)
                this.head.prev = null;
        }
        else if (node === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        else {
            let next = node.next;
            let prev = node.prev;
            node.next = null;
            node.prev = null;
            prev.next = next;
            next.prev = prev;
        }

        this.size--;
    }

    put = (key, value) => {
        let node = this.dict[key];
        if (node) {
            node.value = value;
            this._removeNode(node);
            this._addNode(node);
            return;
        }
        if (this.size === this.capacity) {
            delete this.dict[this.head.key]
            this._removeNode(this.head);
        }
        let newNode = new Node(key, value);
        this.dict[key] = newNode;
        this._addNode(newNode);


    }

    get = (key) => {
        if (this.dict[key]) {
            let node = this.dict[key];
            this._removeNode(node);
            this._addNode(node);
            return node.value;
        } else {
            return -1
        }
    }
}


