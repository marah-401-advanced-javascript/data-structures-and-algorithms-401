
'use strict';
const Graph = require('../graph/graph');


class Vertex{
  constructor(value){
    this.value = value;
  }
}
const newGraph = new Graph();


function breadthFirst(startNode) {
    
  const arr = []; 
  const traversedNode = new Set(); 
  
  arr.push(startNode);
  traversedNode.add(startNode);

  //   console.log(traversedNode);
  while (arr.length) {
    const currentNode = arr.shift();
    // console.log('currentNode',currentNode);
    const neighbors = newGraph.getNeighbors(currentNode);
    // console.log('neighbors',neighbors); 
    for (let neighbor of neighbors) {
      // console.log('neighbor',neighbor)
      const neighborNode = neighbor.vertex;
      if(traversedNode.has(neighborNode)) {
        continue;
      } else {
        traversedNode.add(neighborNode);
      }
      arr.push(neighborNode);
    }
  }
  console.log({ traversedNode});
  return traversedNode;
}


const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
newGraph.addVertex(ten);
newGraph.addVertex(two);
newGraph.addVertex(six);
newGraph.addVertex(seven);
newGraph.addVertex(three);
newGraph.addVertex(eight);
newGraph.printAll();
// console.log('--------------------------------');
newGraph.addDirectedEdge(ten, two);
newGraph.addDirectedEdge(ten, six);
newGraph.addDirectedEdge(ten, three);
newGraph.addDirectedEdge(ten, seven);
newGraph.addDirectedEdge(two, seven);
newGraph.addDirectedEdge(six, seven);
newGraph.addDirectedEdge(six, eight);
newGraph.addDirectedEdge(three, seven);
newGraph.addDirectedEdge(eight, three);



