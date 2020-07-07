'use strict';

////////////////////////////////create tree node class
class treeNode{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

////////////////////////////////////create binary tree class
class BinaryTree{
  constructor(root){
    this.root = root;
  }

  // Preorder (Root, Left, Right) 
  perOrder(){
    const results = [];
    const _traversal = (node) => {
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }

}

///////////////////////////////////////tree_intersection function
function tree_intersection(tree1, tree2) {
  let results = [];

  const _preOrder = (tree) => {
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(tree.root);
    return result;
  };

  let tree1Arr = _preOrder(tree1);
  let tree2Arr = _preOrder(tree2);

  tree1Arr.forEach(val => tree2Arr.includes(val) ? results.push(val) : null);
  return results;
}


///////////////////////////////// First tree
let tree11 = new treeNode(150);
let tree12 = new treeNode(100);
let tree13 = new treeNode(250);
let tree14 = new treeNode(75);
let tree15 = new treeNode(160);
let tree16 = new treeNode(200);
let tree17 = new treeNode(350);
let tree18 = new treeNode(125);
let tree19 = new treeNode(175);
let tree110 = new treeNode(300);
let tree111 = new treeNode(500);
//150
tree11.right = tree13;
tree11.left = tree12;
// 100
tree12.right = tree15;
tree12.left = tree14;
// 250
tree13.right = tree17;
tree13.left = tree16;
// 160
tree15.right = tree19;
tree15.left = tree18;
// 350
tree17.right = tree111;
tree17.left = tree110;

let firstTree = new BinaryTree(tree11);


///////////////////////////////////////// Second tree
let tree21 = new treeNode(42);
let tree22 = new treeNode(100);
let tree23 = new treeNode(600);
let tree24 = new treeNode(15);
let tree25 = new treeNode(160);
let tree26 = new treeNode(200);
let tree27 = new treeNode(350);
let tree28 = new treeNode(125);
let tree29 = new treeNode(175);
let tree210 = new treeNode(4);
let tree211 = new treeNode(500);
//42
tree21.right = tree23;
tree21.left = tree22;
// 100
tree22.right = tree25;
tree22.left = tree24;
// 600
tree23.right = tree27;
tree23.left = tree26;
// 160
tree25.right = tree29;
tree25.left = tree28;
// 350
tree27.right = tree211;
tree27.left = tree210;

let secondTree = new BinaryTree(tree21);

///////////////////////RESULT
console.log(tree_intersection(firstTree, secondTree));

