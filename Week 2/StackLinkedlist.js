class Node{
    constructor(value) {
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor() {
        this.top=null
        this.size=0
    }
    push(value){
        const node=new Node(value)
        node.next=this.top
        this.top=node
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        const remove=this.top.value
        this.top=this.top.next
        this.size--

        return remove
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.top.value
    }
    isEmpty(){
        return this.size===0
    }
    size(){
        return this.size
    }
    display(){
        if(this.isEmpty()){
            console.log('Stack is empty');
        }
        let cur=this.top
        while(cur){
            console.log(cur.value);
            cur=cur.next
        }
    }
}

const stack=new Stack(10)
stack.push(10)
stack.display()