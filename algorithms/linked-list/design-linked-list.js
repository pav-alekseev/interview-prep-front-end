const LinkedNode = function(val) {
    this.val = val;
    this.next = null;
};

var MyLinkedList = function() {
    this.list = new LinkedNode(-1);
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this.size) {
        return -1;
    }

    let curr = this.list.next;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new LinkedNode(val);
    node.next = this.list.next;
    this.list.next = node;
    this.size += 1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const node = new ListNode(val);
    let curr = this.list;
    
    while (curr.next !== null) {
        curr = curr.next;
    }
    
    curr.next = node;
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
    }

    let curr = this.list;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    const node = new LinkedNode(val);
    node.next = curr.next;
    curr.next = node;

    this.size += 1;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= this.size) {
        return;
    }

    let curr = this.list;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    curr.next = curr.next.next;
    this.size -= 1;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
