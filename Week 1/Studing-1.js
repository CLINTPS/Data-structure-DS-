
// function res(arr,t){
//    let i=0
//    let j=arr.length-1
//    while(i<j){
//     while(i<j && arr[j]===t){
//         j--;
//     }
//     if(arr[i]===t){
//         const temp = arr[j]
//         arr[j]=arr[i];
//         arr[i]=temp
//     }
//     i++
//    }
//    return arr
// }

// let arr=[6,5,10,4,3,9,10,8,10]
// let t=10

// console.log(...res(arr,t));


// let arr=[6,5,10,4,3,9,10,8,10]

// arr.push(4)
// arr.pop()
// arr.unshift(0)
// arr.shift()

// console.log(...arr);

// const obj={
//     name:'Clint',
//     age:25,
//     onee : function(){
//         this.name
//         console.log(this.name);
//     }
// }
// obj.place='Vatakara'
// delete obj.age
// console.log(obj);
// obj.onee()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node= new Node(value)
//         if(this.isEmty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//     append(value){
//         const node= new Node(value)
//         if(this.isEmty()){
//             this.head=node
//         }else{
//             let pre=this.head
//             while(pre.next){
//                 pre=pre.next
//             }
//             pre.next=node
//         }
//         this.size++
//     }

//     insert(value,index){
//         if(index<0 || index>this.size){
//             return
//         }
//         if(index==0){
//             this.prepend(value)
//         }else{
//         const node = new Node(value)
//             let pre=this.head
//             for(let i=0;i<index-1;i++){
//                 pre=pre.next
//             }
//             node.next=pre.next
//             pre.next=node
//             this.size++
//         }
//     }

//     removeIndex(index){
//         if(index < 0 || index >= this.size){
//             return null
//         }
//         let removeValue
//         if(index == 0){
//             // removeValue=this.head
//             this.head=this.head.next
//         }else{
//             let pre=this.head
//             for(let i=0;i<index-1;i++){
//                 pre=pre.next
//             }
//             removeValue = pre.next
//             pre.next= removeValue.next
//         }
//         this.size--
//     }

//     removeValue(value){
//         if(this.isEmty()){
//             return null
//         }
//         if(this.head.value=== value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }else{
//             let pre=this.head
//             while(pre.next && pre.next.value !== value){
//                 pre=pre.next
//             }
//             if(pre.next){
//                 let RemoveValue= pre.next
//                 pre.next=RemoveValue.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }

//     print(){
//         if(this.isEmty()){
//             console.log('This list is empty');
//         }else{
//             let curr = this.head
//             let ans=''
//             while(curr){
//                 ans += `${curr.value}, `
//                 curr=curr.next
//             }
//             console.log(ans);
//         }
//     }
// }

// const List = new Linkedlist()
// // console.log('List is empt.....',List.isEmty());
// // console.log('List is .....',List.getSize());
// List.prepend(10)
// List.prepend(20)
// List.prepend(30)
// List.prepend(40)
// List.prepend(50)
// List.prepend(60)
// List.prepend(70)
// List.prepend(80)
// List.append(90)
// List.append(100)

// List.insert(200,9)

// List.removeIndex(0)
// List.removeValue(200)
// List.print()

// function BinnerSerch(arr,t){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         let mid=Math.floor((left+right)/2)
//         if(arr[mid]===t){
//             return mid
//         }else if(arr[mid]>t){
//             right=mid-1
//         }else{
//             left=mid+1
//         }
//     }
//     return -1
// }
// let arr=[1,2,3,4,0,9,8,5,8,9,0,6,8,7,8,9]
// let t=5m
// console.log(BinnerSerch(arr,t));


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
            let f=this.head
            let s=this.head
            while(f&&f.next){
                f=f.next.next
                s=s.next
            }
            return s
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