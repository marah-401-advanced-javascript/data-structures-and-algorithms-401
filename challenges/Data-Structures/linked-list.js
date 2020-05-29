'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    }   
    let current = this.head;
    while (current.next){
      current = current.next;
    }
    current.next = newNode;
    return this;
  }

  includes(value){
    let currentNode = this.head;
    if (value === currentNode.value){return true;}
    else{
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (value === currentNode.value) {return true;}
      }
    } 
    return false;
  }

  toString() {
    let current = this.head;
    let string = '';
    string = `{ ${current.value} }`;
    while (current.next){
      current = current.next;
      string = string + ` -> { ${current.value} }`;
    }
    return string + ` -> { ${current.next} }`;
  }
}

module.exports = LinkedList;