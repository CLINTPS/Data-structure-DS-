class Stack{
    constructor(){
        this.stack=[]
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'Stack is empty'
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'stack is empty'
        }
        return this.stack[this.stack.length-1]
    }
    isEmpty(){
        return this.stack.length===0
    }
    print(){
        if(this.isEmpty()){
            console.log('Stack is empty');
        }
        console.log(this.stack);
    }
}



const stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.peek());
stack.pop()
console.log(stack.peek());
