'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}


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

  // Inorder (Left, Root, Right)
  inOrder(){
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      results.push(node.value);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }

  // Postorder (Left, Right, Root) 
  postOrder(){
    const results = [];
    const _traversal = (node) => {
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
}

class BinarySearch{
  constructor(root){
    this.root = root;
  }
    
  add(val) { 
    let newNode = new Node(val); 
    let _add = (node,newNode)=>{
      if(newNode.value < node.value){ 
        if(node.left === null) node.left = newNode; 
        else _add(node.left, newNode);  
      } 
      else{ 
        if(node.right === null) node.right = newNode; 
        else _add(node.right,newNode); 
      } 
    };
    if(this.root === null)this.root = newNode; 
    else _add(this.root, newNode); 
  }  

  contains(val){
    let results = [];
    let _contain = (node)=>{
      results.push(node.val);
      if(node.left)_contain(node.left);
      if(node.right)_contain(node.right);
    };
    _contain(this.root);
    if(results.includes(val))return true;
    else return false;
  }  
}

