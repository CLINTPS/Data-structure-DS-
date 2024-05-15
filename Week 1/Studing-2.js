class Node{
    constructor(value){
        this.value=value
        this.next=0
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    append(value){
        const node= new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let pre=this.head
            while(pre.next){
                pre=pre.next
            }
            node.next=pre.next
            pre.next=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let cur=this.head
            let ls=''
            while(cur){
                ls+=`${cur.value} `
                cur=cur.next
            }
            console.log(ls);
        }

    }
    MDValue(){
        if(this.isEmpty()){
            return null
        }else{
            let fast=this.head
            let slow=this.head
            while(fast && fast.next){
                fast=fast.next.next
                slow=slow.next
            }
            return slow.value
        }
    }
    MDValueDelete(){
        if(this.isEmpty()){
            return null
        }else{
            let pre=this.head
            let half=Math.floor(this.size/2)
            console.log(half);
            for(let i=0;i<half-1;i++){
                pre=pre.next
            }
            pre.next=pre.next.next
            this.size--
        }
    }
}

let list= new linkedlist()

list.append(10)
list.append(20)
list.append(30)
list.append(35)
// list.append(40)
list.print()
console.log(list.MDValue());
list.MDValueDelete()
list.print()