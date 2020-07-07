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
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  // for you to see and not to use
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
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

}


class Hashmap {
  
  constructor(size) {
    this.size = size;
    this.storage = new Array(size); // [] with that size
  }

  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    console.log(' ');
    console.log('sum charCode',sumCharCode);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    console.log('HASH KEY', hashKey);
    return hashKey; // 2000
  }

  add(key, value) {
    // we need to get index in the storage (Array)
    const hash = this.hash(key);
    // we need to check if there is already value at that index
    if (!this.storage[hash]) {
      // if there is no value create linkedlist and prepend in it 
      const ll = new LinkedList();
      ll.prepend({ [key]: value});
      this.storage[hash] = ll; // ===> [3222] = {head:{value:{"key","value"},next:{}}}
    } else {
      // we already have a value at that index so just prepend to the front of the linkedList
      this.storage[hash].prepend({ [key]: value});
    }
  }

  get(key){
    //get the index of that key in the storage (Array)
    const index = this.hash(key);
    //return what value we have of that key index in the storage
    console.log(this.storage[index]);
    return this.storage[index];
  }

  contains(key){
    // get the index of that key in the storage (Array)
    const index = this.hash(key);
    //return TRUE if the key exists in the table already , FALSE if not
    if (this.storage[index]){
      console.log('TRUE',this.storage[index]);
      return true;

    }else{
      console.log('FALSE');
      return false;

    }
  }

}
  
const hashmap = new Hashmap(4000); // ==> [4000] new Array

hashmap.add('name', 'marah');
hashmap.add('eno', '1');
hashmap.add('one', 'thing');

hashmap.get('name');
// hashmap.get('eno');

hashmap.contains('one');//TRUE
hashmap.contains('hello');//FALSE


// console.log(hashmap.storage);
// console.log(
//   'hi',
//   hashmap.storage[2118].head.value,
// );
  