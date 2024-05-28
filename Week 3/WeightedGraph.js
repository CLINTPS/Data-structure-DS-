class Graph{
    constructor(){
        this.list={}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex]=[]
        }
    }
    addDirectWeightedEdge(vertex1,vertex2,weight){
        if(!this.list[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertex(vertex2)
        }
        this.list[vertex1].push({node : vertex2,weight})
        this.list[vertex2].push({node : vertex1,weight})
    }
    display(){
        for(let res in this.list){
            console.log(res,'->',[...this.list[res]]);
        }
    }
}
const List=new Graph()
List.addDirectWeightedEdge('A','B',5)
List.addDirectWeightedEdge('C','D',15)
List.display()