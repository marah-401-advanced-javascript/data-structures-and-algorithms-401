'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
    
  }
  push(val) {
    let node = new Node(val);
    if (this.top) {
      this.storage.unshift(node);
      this.storage[1].next = this.top.value;
      // this.top.next =this.storage.length-1;
      this.top = node;
      
    } else {
      this.storage.unshift(node);
      this.top = node;
    }
  }
  
  peek() {
    return this.top;
  }
  
  pop() {
    const removed = this.storage.shift();
    this.top = this.storage[0] ? this.storage[0] : null;
    return removed;
  }
  isEmpty(){
    if(this.top){
      return false;
    }else {return true;}
  }
}

let myStack = new Stack;

myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.peek();
myStack.pop();

console.log(myStack,
);

class Queue {
  constructor() {
    this.storage=[];
    // this.front = null;
  }
  enqueue(val) {
    let node = new Node(val);
    this.storage.push(node);
    // this.front = node;
  }
  dequeue() {
    return this.storage.shift();
  }

  peek() {
    return this.storage[0]?this.storage[0]:'exception';
    // return this.front?this.front:'exception';

  }
  isEmpty(){
    if(this.front){
      return false;
    }else {return true;}
  }
}


let myQueue= new Queue;

myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
// myQueue.dequeue();
// myStack.pop();

// console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);

module.exports={Node ,Stack};
