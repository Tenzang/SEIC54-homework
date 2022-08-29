class Node {
	constructor(data) {
		// a Node starts with a given data property
		this.data = data;
		// a Node also has a .next property initialized as null
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	appendNode(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	prependNode(value) {
		const newNode = new Node(value);

		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.length = 1;
			return;
		}

		const currentHead = this.head;
		const newHead = newNode;
		this.head = newHead;
		newHead.next = currentHead;
		this.length++;
		return newHead;
	}
	pop() {
		if (!this.head) return;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}

		let current = this.head;
		let newTail = null;
		while (current) {
			if (current.next) {
				newTail = current;
			}
			current = current.next;
		}
		const deleteNode = this.tail;
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		return deleteNode;
	}
	removeFromFront() {
		if (!this.head) return null;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length = 0;
			return;
		}
		const currentHead = this.head;
		const newHead = currentHead.next;
		this.head = newHead;
		this.length--;
		return currentHead;
	}
	insertAt(index, value) {
		const previousNode = this.nodes[index - 1] || null;
		const nextNode = this.nodes[index] || null;
		const node = { value, next: nextNode };

		if (previousNode) previousNode.next = node;
		this.nodes.splice(index, 0, node);
	}
	removeAt(index) {
		const previousNode = this.nodes[index - 1];
		const nextNode = this.nodes[index + 1] || null;

		if (previousNode) previousNode.next = nextNode;

		return this.nodes.splice(index, 1);
	}
	search(data) {
		// searches the list for a node with the given data
		// if it is found, return the "index" of the node, considering 0 to be the first node
		// if not, return false
	}
	sort() {
		// sort the Linked List in ascending order of data values
	}
}

module.exports = {
	Node,
	LinkedList,
};
