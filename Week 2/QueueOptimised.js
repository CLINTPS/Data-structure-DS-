class QueueOptimised{
    constructor(){
        this.items = []
        this.rear=0
        this.front=0
    }
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }
    dequeue(){
        let item=this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front===0
    }
    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items);
    }
}

const queue=new QueueOptimised()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print()
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.dequeue());

