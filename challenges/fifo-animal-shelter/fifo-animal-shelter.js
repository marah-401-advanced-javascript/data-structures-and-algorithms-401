'use strict';

class Node{
  constructor(value){
    this.value = value;
    // this.next = null;
  }
}
  
class Queue{
  constructor(){
    this.storage = new Array();
    // this.front = null;
  }
  enqueue(value){
    if(!this.front){
      let node = new Node(value);
      this.storage.push(node);
    //   this.front = this.storage[0];
    }
    else{
      let node = new Node(value);
      let len = this.storage.length;
      this.storage[len-1].next = len +1;
      this.storage.push(node);
    //   this.front = this.storage[0];  
    }
          
  }
}

class AnimalShelter{
  constructor(){
    this.storage = new Array(); //[]
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(animal){
    let newAnimal = new Node(animal);
    if(animal === 'cat'){
      this.cats.enqueue(newAnimal);
      this.storage.unshift(this.cats.storage);//push
    }
    else if (animal === 'dog'){
      this.dogs.enqueue(newAnimal);
      this.storage.unshift(this.dogs.storage);//push
    }
  }

  dequeue(pref){
    if(pref==='cat'){
      let cat = this.cats.storage.pop();
      return cat;
    }
    else if(pref==='dog'){
      let dog = this.dogs.storage.pop();
      return dog;
    }
    else if (!this.cats.storage.length || !this.dogs.storage.length || pref !== 'dog' || pref !== 'cat')return null;
  }
}

let myShelter = new AnimalShelter;


myShelter.enqueue('cat');
myShelter.enqueue('cat');
myShelter.enqueue('dog');
myShelter.enqueue('something else');

myShelter.enqueue('something else');
// myShelter.dequeue('cat');

console.log('RESULT: ',myShelter);
// console.log('RESULT: ',myShelter.dequeue('something else'));
