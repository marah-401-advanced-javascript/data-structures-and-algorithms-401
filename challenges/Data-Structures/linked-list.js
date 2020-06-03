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

  palindrome(){
    let current= this.head;
    let arr1=[];
    while(current.next){
      arr1.push(current.value);
      current = current.next;
    }
    arr1.push(current.value);
    let reversedArr=[];
    for (let i=0 ; i<arr1.length ; i++ ){
      reversedArr[i]=arr1[arr1.length-i-1];
    }
    console.log(arr1);
    console.log(reversedArr);
    for (let i=0 ; i<arr1.length ; i++ ){
      if (arr1[i]!==reversedArr[i])return false ;
    }
    return true ;
  }

  reverse(){
    let current= this.head;
    let arr1=[];
    while(current.next){
      arr1.push(current.value);
      current = current.next;
    }
    arr1.push(current.value);
    let reversedArr=[];
    for (let i=0 ; i<arr1.length ; i++ ){
      reversedArr[i]=arr1[arr1.length-i-1];
    }
    let newNode = new Node(reversedArr[0]);
    let newll = new LinkedList();
    newll.head = newNode;
    for (let i=1 ; i<reversedArr.length ; i++ ){
      newll.append(reversedArr[i]);
    }
    return newll.toString() ;
  }
  

}


function llmerge(l1 , l2){
  let first = l1.head.value;
  let second = l2.head.value;
  let newNode = new Node(first);
  let newll = new LinkedList();
  newll.head = newNode;
  newll.append(second);

  while((l1.head.next)||(l2.head.next)){
    if (l1.head.next){
      let first2 = l1.head.next.value;
      newll.append(first2);
    }
    if (l2.head.next){
      let second2 = l2.head.next.value;
      newll.append(second2);        
    }
    l1.head = l1.head.next;
    l2.head = l2.head.next;
      
    if (!l1.head){
      l1.head=0;
      l1.next=null;
    }
    if (!l2.head){
      l2.head=0;
      l2.next=null;
    }
  }
  return newll ; 
}


const l1 = new LinkedList();
l1.append(100);
l1.append(200);
l1.append(300);
l1.append(400);

console.log(l1.toString());
console.log('---------------------------------------');


const l2 = new LinkedList();
l2.append(1);
l2.append(2);
l2.append(3);
l2.append(4);

console.log(l2.toString());
console.log('---------------------------------------');

const mergedLL = llmerge(l1 , l2);
console.log(mergedLL.toString());

module.exports = LinkedList;
