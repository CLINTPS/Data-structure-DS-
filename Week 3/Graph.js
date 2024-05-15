class Graph{
    constructor() {
        this.list={}
    }
    addVertec(vertex){
        if(!this.list[vertex]){
            this.list[vertex]= new Set()
        }
    }
    addDirectEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertec(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertec(vertex2)
        }
        this.list[vertex1].add(vertex2)
    }
    addUniDirectEdge(vertex1,vertex2){
        if(!this.list[vertex1]){
            this.addVertec(vertex1)
        }
        if(!this.list[vertex2]){
            this.addVertec(vertex2)
        }
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }   
    display(){
        for(let x in this.list){
            console.log(x,'->',[...this.list[x]]);
        }
    }
    hasEdge(vertex1,vertex2){
        return(this.list[vertex1].has(vertex2))
    }
    removeEdge(vertex1,vertex2){
        this.list[vertex1].delete(vertex2)
        this.list[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.list[vertex]){
            return 
        }
        for(let x of this.list[vertex]){
            // this.removeEdge(vertex,x)
            this.list[x].delete(vertex)
        }
        delete this.list[vertex]
    }
}

const graph=new Graph()
graph.addVertec('a')
graph.addVertec('b')
// graph.addVertec('c')
// graph.addVertec('d')
// graph.addVertec('d')
graph.addDirectEdge('a','b')
graph.addUniDirectEdge('a','b')
graph.display()
// graph.removeEdge('a','b')
// graph.display()
// graph.removeVertex('b')
// graph.display()



