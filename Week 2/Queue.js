    class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }

}

const queue=new Queue()
queue.enqueue(4)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(8)
queue.enqueue(6)
queue.print()
console.log(queue.size());
console.log(queue.peek());
