'use strict';

function fizzBuzzTree(tree) {
  const checked = (node) => {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    } else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else {
      node.value = `${node.value}`;
    }
    if (node.left) checked(node.left);
    if (node.right) checked(node.right);
  };
  checked(tree.root);
}

module.exports = fizzBuzzTree;

