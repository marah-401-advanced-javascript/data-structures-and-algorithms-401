'use strict';
const linkedListModule = require('../challenges/Data-Structures/linked-list');

describe('Linked List', () => {


  it('1. Can successfully instantiate an empty linked list', () => {
    const linkedListInstance = new linkedListModule();
    expect(linkedListInstance.head).toBeNull();
  });
  it('2. Can properly insert into the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.insert(7); //head
    expect(linkedListInstance.head.value).toStrictEqual(7);
  });
  it('3. The head property will properly point to the first node in the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.insert(6); //head
    linkedListInstance.insert(5);
    expect(linkedListInstance.head.value).toStrictEqual(6);
  });
  it('4. Can properly insert multiple nodes into the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.insert(5);
    linkedListInstance.insert(3);
    linkedListInstance.insert(1);
    expect(linkedListInstance.head.next.next.value).toStrictEqual(1);

  });
  it('5. Will return true when finding a value within the linked list that exists', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.insert(5);
    linkedListInstance.insert(3);
    linkedListInstance.insert(1);
    expect(linkedListInstance.includes(3)).toBeTruthy();
  });
  it('6. Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.insert(5);
    linkedListInstance.insert(3);
    linkedListInstance.insert(1);
    expect(linkedListInstance.includes(4)).toBeFalsy();
  });
  it('7. Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.insert(9);
    linkedListInstance.insert(7);
    linkedListInstance.insert(5);
    linkedListInstance.insert(3);
    linkedListInstance.insert(1);
    expect(linkedListInstance.toString()).toStrictEqual('{ 9 } -> { 7 } -> { 5 } -> { 3 } -> { 1 } -> { null }');
  });
}); 