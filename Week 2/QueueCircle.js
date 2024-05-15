class circleQueue{
    constructor(capacity){
        this.item=new Array(capacity)
        this.capacity=capacity
        this.currentLength=0
        this.rear=-1
        this.front=-1
    }
    isFull(){
        return this.currentLength === this.capacity
    }
    isEmpty(){
        return this.currentLength===0
    }
    enqueue(element){
        if(!this.isFull()){
            this.rear=(this.rear+1) % this.capacity
            this.item[this.rear]=element
            this.currentLength+=1
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const items=this.item[this.front]
        this.item[this.front]=null
        this.front=(this.front+1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()){
            this.front =-1
            this.rear =-1
        }
        return items
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[this.front]
        }
        return null
    }   
    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let i = this.front;
            let str = '';
    
            for (let j = 0; j < this.currentLength; j++) {
                str += this.item[i] + ' ';
                i = (i + 1) % this.capacity;
            }
    
            console.log(str);
        }
    }
}

const queue=new circleQueue()
console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
