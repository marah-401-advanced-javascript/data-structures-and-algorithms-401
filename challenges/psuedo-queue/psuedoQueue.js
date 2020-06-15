'use strict';

class Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    this.top ? node.next = this.top : null;
    return this.top = node;
  }

  pop() {
    let value = null;
    if (this.top) {
      value = this.top.value;
      this.top = this.top.next;
    }
    return value;
  }
  peek() {
    const topValue = this.top ? this.top.value : null;
    return topValue;
  }
}

class PseudoQueue {
  constructor() {
    this.front = new Stack();
    this.rear = new Stack();
  }
  enqueue(value) {
    return this.rear.push(value);
  }
  dequeue() {
    if( this.front.peek() ){
      return this.front.pop();
    } 
    if (!this.rear.peek()) return 'Nothing';
    while (this.rear.peek()) {
      let value = this.rear.pop();
      this.front.push(value);
    }
    return this.front.pop();
  }
}

let myQueue= new PseudoQueue;

myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

myQueue.enqueue(3);

console.log(myQueue.dequeue());
console.log(myQueue);
