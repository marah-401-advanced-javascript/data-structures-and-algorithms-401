'use strict';


const Graph = require('../graph/graph.js');

function getEdge(graph, array) {

  let neighrbor = graph.getNeighbors(array[0]);
  for (let i = 0; i < neighrbor.length; i++) {
    if (array[1] === neighrbor[i].vertex) {
      return `True, ${neighrbor[i].weight}$`;
    }
  }
  return `False, 0$`;
  
}

