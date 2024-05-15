class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor() {
        this.front=null
        this.rear=null
        this.size=0
    }
    enqueue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const remove=this.front.value
        this.front=this.front.next
        this.size--

        if(this.isEmpty()){
            this.rear=null
        }
        return remove
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.front.value
    }
    size(){
        return this.size
    }
    isEmpty(){
        return this.size===0
    }
    display(){
        if(this.isEmpty()){
            return null
        }
        let cur=this.front
        while(cur){
            console.log(cur.value);
            cur=cur.next
        }
    }
}

const queue=new Queue(10)
queue.enqueue(10)
queue.display()