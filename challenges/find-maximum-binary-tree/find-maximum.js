'use strict';

const Tree = require('../tree/tree');

class findMaxValue extends Tree {
  findMax() {
    let max = 0;
    let _walk = (node) => {
      if (max < node.value) max = node.value;
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);//this will start checking the tree from the root 
    return max;
  }
}

module.exports= findMaxValue;