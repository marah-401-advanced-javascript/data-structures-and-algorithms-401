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
    // console.log(' ');
    // console.log('sum charCode',sumCharCode);
    // 19 is a prime number YOU CAN USE ANY OTHER PRIME VALUE
    // since the resulted number can go out of size we will do % size
    const hashKey = (sumCharCode * 19) % this.size;
    // console.log('HASH KEY', hashKey);
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
    //   console.log('TRUE');
      return true;
  
    }else{
    //   console.log('FALSE');
      return false;
  
    }
  }
  
}

const hashmap1 = new Hashmap(4000); 

hashmap1.add('fond', 'enamored');
hashmap1.add('wrath', 'anger');
hashmap1.add('outift', 'grab');//////
hashmap1.add('guide', 'usher');

const hashmap2 = new Hashmap(4000); 

hashmap2.add('fond', 'averse');
hashmap2.add('wrath', 'delight');
hashmap2.add('flow', 'jam');///////
hashmap2.add('guide', 'follow');

console.log(hashmap1.storage[37].head.value); //first key value 

///////////////////////////////////

function leftJoin (h1 ,h2){
  let bigArr=[];
  for(let i=0 ; i<h1.storage.length ; i++){
    let smallArr=[];
    if (h1.storage[i]){
      let test = Object.create(h1.storage[i].head.value);
      while (test) {
        for (let key in h1.storage[i].head.value) {
          let scondVal =h2.contains(key) ? h2.get(key) : 'NULL';
          smallArr.push(key, test[key], scondVal);
          bigArr.push(smallArr);
        }
        test = test.next;
      }
    }
  }

  return bigArr;

}
///////////////////////////////////

console.log(leftJoin(hashmap1, hashmap2));
