class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this._adjancyList = new Map();
  }
  //adding new node
  addVertex(vertex) {
    this._adjancyList.set(vertex, []);
  }

  //adding an edge
  addDirectedEdge(startVertex, endVertex, weight) {
    if ( !this._adjancyList.has(startVertex) || !this._adjancyList.has(endVertex) ){
      console.log('Vertex not found');
    } else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  //get neighbors 
  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    }else{
      return 'no neighbors';
    }
  }

  //print out the graph in an array 
  printAll(){
    let array = [];
    for (const [vertices, edge] of this._adjancyList.entries()) {
      array.push([vertices,edge]);
    }
    return array;
  }

  // size of the graph
  size(){
    return this._adjancyList.size;
  }


}


const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.printAll();
// console.log('--------------------------------');
graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, seven);
graph.addDirectedEdge(eight, three);

console.log(graph.size());
// graph.printAll();
// graph.size();

// console.log('NEIGHBORS', graph.getNeighbors(ten));
  