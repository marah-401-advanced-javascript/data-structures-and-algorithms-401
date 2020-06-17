'use strict';

const Tree = require('../tree/tree');

class BreadthFirst extends Tree {
  breadthFirst() {
    let output = [];
    let arr1 = [];
    if (!this.root) return null;
    arr1.push(this.root);
    
    while (arr1.length > 0) {
      let node = arr1.shift();
      output.push(node.value);
      if (node.left) arr1.push(node.left);
      if (node.right) arr1.push(node.right);
    }
    return output;
  }

}

module.exports= BreadthFirst;