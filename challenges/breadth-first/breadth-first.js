'use strict';

const Tree = require('../tree/tree');

class BreadthFirst extends Tree {
  breadthFirst() {
    let output = [];
    let temp = [];
    if (!this.root) return null;
    temp.push(this.root);
    
    while (temp.length > 0) {
      let node = temp.shift();
      output.push(node.value);
      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }
    return output;
  }

}

module.exports= BreadthFirst;