class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head.pre=node
            this.head=node
        }
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            let pre=this.tail
            this.tail=node
            this.tail.prev=pre
        }
        this.size++
    }

    DeleteIndex(index){
        if(index<0 || index>this.size){
            return null
        }
        let remove
        if(index==0){
            this.head=this.head.next
        }else{
            let pre=this.head
            for(let i=0;i<index-1;i++){
                pre=pre.next
            }
            remove=pre.next
            pre.next=remove.next
            remove.prev=pre
        }
    }

    DeleteValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
        }else{
            let pre=this.head
            while(pre.next && pre.next.value !== value){
                pre=pre.next
            }
            pre.next=pre.next.next
            this.size--
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let curr=this.head
            let ls=''
            while(curr){
                ls+=`${curr.value} `
                curr=curr.next
            }
            console.log(ls);
        }
    }
}

const list = new Linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.print()
list.DeleteIndex(2)
list.print()
list.DeleteValue(20)
list.print()