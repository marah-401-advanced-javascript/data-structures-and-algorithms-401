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
    expect(linkedListInstance.head.value).toStrictEqual(5);
  });
  it('4. Can properly insert multiple nodes into the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.insert(5);
    linkedListInstance.insert(3);
    linkedListInstance.insert(1);
    expect(linkedListInstance.head.next.next.value).toStrictEqual(5);

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
    expect(linkedListInstance.toString()).toStrictEqual('{ 1 } -> { 3 } -> { 5 } -> { 7 } -> { 9 } -> { null }');
  });
  it('8. Can successfully add a node to the end of the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.append(6); 
    linkedListInstance.append(5); 
    expect(linkedListInstance.head.next.value).toStrictEqual(5);
  });
  it('9. Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.append(9);
    linkedListInstance.append(7);
    linkedListInstance.append(5);
    linkedListInstance.append(3);
    linkedListInstance.append(1);
    expect(linkedListInstance.toString()).toStrictEqual('{ 9 } -> { 7 } -> { 5 } -> { 3 } -> { 1 } -> { null }');
  });
  it('10. Can successfully insert a node before a node located i the middle of a linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.append(1);
    linkedListInstance.append(2);
    linkedListInstance.append(4);
    linkedListInstance.append(5);
    linkedListInstance.insertBefore(4,3);
    expect(linkedListInstance.toString()).toStrictEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { null }');
  });
  it('11. Can successfully insert a node before the first node of a linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.append(9);
    linkedListInstance.append(8);
    linkedListInstance.insertBefore(9,10);
    expect(linkedListInstance.toString()).toStrictEqual('{ 10 } -> { 9 } -> { 8 } -> { null }');
  });
  it('12.Can successfully insert after a node in the middle of the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.append(1);
    linkedListInstance.append(2);
    linkedListInstance.append(4);
    linkedListInstance.append(5);
    linkedListInstance.insertAfter(2,3);
    expect(linkedListInstance.toString()).toStrictEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { null }');
  });
  it('13. Can successfully insert a node after the last node of the linked list', () => {
    const linkedListInstance = new linkedListModule();
    linkedListInstance.append(10);
    linkedListInstance.append(9);
    linkedListInstance.insertAfter(9,8);
    expect(linkedListInstance.toString()).toStrictEqual('{ 10 } -> { 9 } -> { 8 } -> { null }');
  });

});
