  
'use strict';
const Graph = require('../graph/graph');

class Vertex{
  constructor(value){
    this.value = value;
  }
}

let graph = new Graph();

function depthFirst(startNode, visited = new Set()){
    
  visited.add(startNode);
  let neighborNodes = graph.getNeighbors(startNode);
  if(neighborNodes !== undefined){
    for(const neighborNode of neighborNodes){
      if(!(visited.has(neighborNode))){
        depthFirst(neighborNode.vertex, visited);
      }
    } 
  }
  return visited;
}
