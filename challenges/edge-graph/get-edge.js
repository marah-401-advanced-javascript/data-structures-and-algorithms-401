'use strict';
const Graph = require('../graph/graph.js');

class GetEdge extends Graph {

  getEdge(arr) {
    let counter = 0;
    let sum = 0;
    for (let i = 1; i < arr.length; i++) {
      let x = this._adjancyList.get(arr[i-1]);
      for (let j = 0; j < x.length; j++) {
        if (arr[i].value === x[j].vertex.value) {
          counter++;
          sum += x[j].weight;
          break;
        }
      }

    }
    if(counter === arr.length-1){
      return `True, $${sum}`;
    }else{
      return `False, $0`;

    }
  }
}

module.exports = GetEdge;
