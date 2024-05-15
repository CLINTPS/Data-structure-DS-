class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Liinkedlist{
    constructor(){
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
        const node= new Node(value)
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
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty......');
        }else{
            let curr= this.head
            let listView= ''
            while(curr){
                listView +=`${curr.value},`
                curr=curr.next
            }
            console.log(listView);
        }
    }

    middleValue(){
        if(this.isEmpty()){
            return null
        }else{
            let fast=this.head;
            let slow=this.head;
            while(fast && fast.next){
                fast=fast.next.next;
                slow=slow.next;
            }
            return slow.value
        }
    }

    middleValueDelete(){
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

let list= new Liinkedlist()

console.log('Linked list is emty :',list.isEmpty());
console.log('Size is : ',list.getSize());

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.prepend(9)
console.log('Middle Node Value:',list.middleValue());
list.print()
list.middleValueDelete()
list.print()

