'use strict';
const MyStack = require('../stack&queue/stack-and-queue.js');


class PsuedoQueue {
  constructor() {
    this.storage=[];
    // this.front = null;
  }
  enqueue(val) {
    let newStack = new MyStack(val);
    this.storage.push(newStack);
    // this.front = node;
  }
  dequeue() {
    return this.storage.shift();
  }
  
}

let myQueue= new PsuedoQueue;

myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);