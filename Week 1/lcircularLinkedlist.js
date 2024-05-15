class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Linkedlist{
    constructor() {
        this.head=null
        this.size=0
    }

    isEmty(){
        return this.size===0
    }
    
    prepend(value){
        const node=new Node(value)
        if(this.isEmty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.isEmty()){
            console.log('List is empty');
        }else{
            let cur=this.head
            let ls=''
            while(cur){
                ls += `${cur.value} `
                cur=cur.next
            }
            console.log(ls);
        }
    }

    circleCheck(){
        if(this.isEmty()){
            return
        }else{
            let fast=this.head.next
            let slow=this.head
            while(fast && fast.next){
                if(fast===slow){
                    return true
                }
                fast=fast.next.next
                slow=slow.next
            }
            return false
        }
    }
}

const list = new Linkedlist()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.prepend(50)
console.log(list.circleCheck());
list.print()