class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Linkedlist{
    constructor() {
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmty(){
        return this.size===0
    }

    append(value){
        const node = new Node(value)
        if(this.isEmty()){
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

    arrayToLinkedlist(arr){
        const node=new Node(arr[0])
        if(this.isEmty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }

        for(let i=1;i<arr.length;i++){
            const node=new Node(arr[i])
            this.tail.next=node
            this.tail=node
        }
        this.size=arr.length
    }
}

const list = new Linkedlist()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
let arr=[6,5,10,4,3,9,10,8,10]
list.arrayToLinkedlist(arr)
list.print()