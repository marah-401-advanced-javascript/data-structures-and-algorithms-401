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
    const node = new Node(value);
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
    // console.log(string);
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
    //if the value is head 
    let node = new Node(newVal);
    let currentNode = this.head;
    if(currentNode.value === value) {
      node.next = this.head;
      this.head = node;
    }
    //if the value is any other node
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.next.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        return this;
      }
    }
    return ;
  }  

  insertAfter(value, newVal) {
    if (!this.head) return;
    let node = new Node(newVal);
    let currentNode = this.head;
    if(currentNode.value === value) {
      node.next = this.head.next;
      this.head.next = node;
    }
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

  
  kthFromEnd(val){
    let myArr=[];
    let current = this.head;
    while (current.next){
      myArr.push(current.value);
      current = current.next;
    }
    myArr.push(current.value);
    const myVar= myArr.length-1;
    const diff = myVar - val ; 
    if (val > myVar ){
      return 'Exception';
    }else{
      return myArr[diff];
    }
  } 


  reverse(){
    let newL = new LinkedList();
    let current = this.head;
    let newNode = new Node(current.val);
    newL.insert(newNode.val);
    while(current.next){
      current = current.next;
      let newNode = new Node(current.val);
      newL.insert(newNode.val);
    }
    return newL.toString() ;
  }
  // reverse(){
  //   let current= this.head;
  //   let arr1=[];
  //   while(current.next){
  //     arr1.push(current.value);
  //     current = current.next;
  //   }
  //   arr1.push(current.value);
  //   let reversedArr=[];
  //   for (let i=0 ; i<arr1.length ; i++ ){
  //     reversedArr[i]=arr1[arr1.length-i-1];
  //   }
  //   let newNode = new Node(reversedArr[0]);
  //   let newll = new LinkedList();
  //   newll.head = newNode;
  //   for (let i=1 ; i<reversedArr.length ; i++ ){
  //     newll.append(reversedArr[i]);
  //   }
  //   return newll.toString() ;
  // }
  


}

function isPalindrom(ll){
  let newL = new LinkedList();
  let current = ll.head;
  let newNode = new Node(current.val);
  newL.insert(newNode.val);
  while(current.next){
    current = current.next;
    let newNode = new Node(current.val);
    newL.insert(newNode.val);
  }
  // console.log(newL.toString());
  // console.log(ll.toString());
  if(newL.toString() === ll.toString()){
    return true;
  }else{
    return false;
  }
}



function zipLists(ll1 , ll2){
  let current1 = ll1.head;
  let current2 = ll2.head;
  let newL = new LinkedList();
  let node1 = new Node(current1.value);
  let node2 = new Node(current2.value);
  newL.append(node1.value);
  newL.append(node2.value);
  while(current1.next || current2.next){
    if(current1.next){
      current1 = current1.next;
      let node = new Node(current1.value);
      newL.append(node.value);
    }
    if(current2.next){
      current2 = current2.next;
      let node = new Node(current2.value);
      newL.append(node.value);
    }
  }
  return newL.toString();
}

function removeDuplicates(ll){
  let newL = new LinkedList();
  let current = ll.head;
  let newNode = new Node(ll.head.value);
  newL.append(newNode.value);
  while(current.next){
    current = current.next;
    if(!newL.includes(current.value)){
      newNode = new Node (current.value);
      newL.append(newNode.value);
    }
  }
  return newL.toString();
}



const l1 = new LinkedList();
l1.append(100);
l1.append(200);
l1.append(300);
l1.append(400);
l1.append(200);

console.log(l1.toString());
// console.log('---------------------------------------');


const l2 = new LinkedList();
l2.append(1);
l2.append(2);
l2.append(3);
l2.append(4);
// l2.insertBefore(3,0);

// console.log(l2.toString());
console.log('---------------------------------------');
// console.log(zipLists(l1 , l2));
console.log(removeDuplicates(l1));
module.exports = LinkedList;
