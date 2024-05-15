class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkiedList{
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
    
    insert(value,index){
        if(index<0 || index > this.size){
            return
        }
        if(index == 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next = prev.next
            prev.next=node
            this.size++
        }
    }

    removeIndex(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeValue
        if(index == 0){
            // removeValue=this.head
            this.head=this.head.next
        }else{
            let pre=this.head
            for(let i=0;i<index-1;i++){
                pre=pre.next
            }
            removeValue = pre.next
            pre.next= removeValue.next
        }
        this.size--
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value=== value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let pre=this.head
            while(pre.next && pre.next.value !== value){
                pre=pre.next
            }
            if(pre.next){
                let RemoveValue= pre.next
                pre.next=RemoveValue.next
                this.size--
                return value
            }
            return null
        }
    }

    serch(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr=this.head
        while(curr){
            if(curr.value === value){
                return i
                
            }
            curr=curr.next
            i++
        }
        return -1
    }
    

    reverse(){
        let pev=null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = pev
            pev=curr
            curr=next
        }
        this.head=pev
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
}

const list=new LinkiedList()
console.log('List is empty',list.isEmpty());
console.log('List is: ',list.getSize());
list.print()
    
list.prepend(20)
list.prepend(30)    
list.prepend(40)    
list.prepend(50)    
list.prepend(60)
list.print()

list.removeIndex(1)
list.removeValue(40)
list.serch(50)
list.print()
list.reverse()
list.print()
console.log(list.serch(50));

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.print()

list.insert(10,3)
list.print()

// console.log(list.remove(2));
// list.remove()
// list.print()