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
    const node = new Node(value, this.head);
    if (!this.head){
     this.head = node;
    } else {
     node.next = this.head;
     this.head = node;
    }
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
    let string = `{ ${current.value} }`;
    while (current.next){
      current = current.next;
      string = string + ` -> { ${current.value} }`;

    }
    return string + ` -> { null }`;
    console.log(string);
  }

  append(value){
    let node = new Node(value);
    //if empty make head(edge case)
    if (!this.head) {
        this.head = node;
        return this;
        }
    //insert at last
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
    }

  insertBefore(value, newVal) {
      //if empty return nothing
      if (!this.head) return;
      //if the value is head use insert()
      let node = new Node(newVal);
      let currentNode = this.head;
      if(currentNode.value === value) return this.insert(newVal);
      //if the value is any other node
      while (currentNode.next) {
      if (currentNode.next.value === value) {
          node.next = currentNode.next;
          currentNode.next = node;
          return this;
      }
      currentNode = currentNode.next;
      }
      return ;
  }  

  insertAfter(value, newVal) {
      //if empty return nothing
      if (!this.head) return;
      //if the value is any other node 
      let node = new Node(newVal);
      let currentNode = this.head;
      while (currentNode.next) {
          currentNode = currentNode.next;
          if (currentNode.value === value) {
              node.next = currentNode.next;
              currentNode.next = node;
              return this;
          }
      }
      return ;
  } 
}

 

// const ll = new LinkedList();
// ll.insert(100);
// ll.insert(200);
// ll.insert(300);
// ll.append(0);
// ll.insertAfter(200,100000);

// ll.toString();

module.exports = LinkedList;
