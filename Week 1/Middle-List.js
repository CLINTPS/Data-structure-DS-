class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Liinkedlist{
    constructor() {
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let pre=this.head
            while(pre.next){
                pre=pre.next
            }
            pre.next=node
        }
        this.size++
    }

    print(){
       if(this.isEmpty()){
        console.log('List is emty');
       }else{
        let cu=this.head
        let ls=''
        while(cu){
            ls+=`${cu.value} `
            cu=cu.next
        }
        console.log(ls);
       }
    }

   

    midleValue(){
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


    midleValueDelete(){
        if(this.isEmpty()){
            return null
        }else{
            let pre=this.head
            let half=Math.floor(this.size/2)
            for(let i=0;i<half-1;i++){
                pre=pre.next
            }
            pre.next=pre.next.next
            this.size--
        }
    }
}

const list = new Liinkedlist()
list.prepend(20)
list.prepend(10)
list.prepend(40)
list.prepend(60)
list.prepend(70)
console.log('qqqq',list.midleValue().value);
list.midleValueDelete()
list.print()