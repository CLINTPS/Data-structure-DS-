// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinneryTree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const newNode=new Node(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value > newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     serch(root,value){
//         if(!root){
//             return false
//         }else{
//         if(root.value===value){
//             return true
//         }else if(root.value>value){
//             return this.serch(root.left,value)
//         }else{
//             return this.serch(root.right,value)
//         }
//       }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     isEmpty(){
//         return this.root===null
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }
// }

// const bts=new BinneryTree()
// console.log(bts.isEmpty());
// bts.insert(10)
// bts.insert(5)
// bts.insert(15)
// bts.insert(3)
// bts.insert(7)
// console.log(bts.min(bts.root));
// console.log(bts.max(bts.root));

// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeaap(value){
//         this.heap=[...value]
//         for(let i=0;i<value.length;i++){
//             this.heapifyDown(i)
//         }
//     }
//     insert(element){
//         this.heap.push(element)
//         this.heapifyUp[this.heap.length-1]
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             this.heap.pop()
//         }
//         const min=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         while(true){
//             const leftChild=2*index+1
//             const rightChild=2*index+2
//             let smallest=index
//             if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
//                 smallest=leftChild
//             }
//             if(rightChild<this.heap.length&&this.heap[rightChild]<this.heap[smallest]){
//                 smallest=rightChild
//             }
//             if(index !== smallest){
//                 [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
//                 index=smallest
//             }else{
//                 break
//             }
//         }
//     }
//     heapifyUp(index){
//         while(index>0){
//             const parantIndex=Math.floor((index-1)/2)
//             if(this.heap[index]<this.heap[parantIndex]){
//                 [this.heap[index],this.heap[parantIndex]]=[this.heap[parantIndex],this.heap[index]]
//                 index=parantIndex
//             }else{
//                 break
//             }
//         }
//     }
// }

// const minHeap=new MinHeap()
// minHeap.buildHeaap([5,7,9,4,6,3,8,2,41])
// console.log(minHeap.heap);
// minHeap.insert(55)
// console.log(minHeap.heap);

// class MaxHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(element){
//         this.heap=[...element]
//         for(let i=0;i<element.length;i++){
//             this.hepifyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.hepifyUp(this.heap.length-1)
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//            return this.heap.pop()
//         }
//         const Max=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.hepifyDown(0)
//         return Max
//     }
//     hepifyUp(index){
//         while(index>0){
//             const parantIndex=Math.floor((index-1)/2)
//             if(this.heap[index]>this.heap[parantIndex]){
//                 [this.heap[index],this.heap[parantIndex]]=[this.heap[parantIndex],this.heap[index]]
//                 index=parantIndex
//             }else{
//                 break
//             }
//         }
//     }
//     hepifyDown(index){
//         while(true){
//             const leftChild=2*index+1
//             const rightChild=2*index+2
//             let largest=index
//             if(leftChild<this.heap.length && this.heap[leftChild]>this.heap[largest]){
//                 largest=leftChild
//             }
//             if(rightChild<this.heap.length && this.heap[rightChild]>this.heap[largest]){
//                 largest=rightChild
//             }
//             if(index !== largest){
//                 [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
//                 index=largest
//             }else{
//                 break
//             }
//         }
//     }
// }

// class HeapSort{
//     sort(arr){
//         const n=arr.length-1
//         for(let i=Math.floor(n/2)-1;i>=0;i--){
//             this.heapify(arr,n,i)
//         }
//         for(let i=n;i>0;i--){
//             [arr[0],arr[i]]=[arr[i],arr[0]]
//             this.heapify(arr,i,0)
//         }
//         return arr
//     }
//     heapify(arr,n,i){
//         const left=2*i+1
//         const right=2*i+2
//         let largest=i
//         if(left<n && arr[left]>arr[largest]){
//             largest=left
//         }
//         if(right<n && arr[right]>arr[largest]){
//             largest=right
//         }
//         if( largest !== i){
//             [arr[i],arr[largest]]=[arr[largest],arr[i]]
//             this.heapify(arr,n,largest)
//         }
//     }
// }
// const heapSort=new HeapSort()
// const unsort = [5,8,74,9,4,9,4,8,4,8,9,4]
// const sort=heapSort.sort(unsort)
// console.log(sort);


// class Graph{
//     constructor(){
//         this.list={}
//     }
//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }
//     addDirect(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addDirect(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//     }
//     addUniDirect(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addDirect(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     display(){
//         for(let x of this.list){
//             console.log(x,[...this.list[x]]);
//         }
//     }
//     hasEdge(vertex1,vertex2){
//         return (this.list[vertex1].has(vertex2))
//     }
//     removeEdge(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return
//         }
//         for(let x of this.list[vertex]){
//             this.list[x].delete(vertex)
//         }
//         delete this.list[vertex]
//     }

// }

// class TreeNode{
//     constructor(value) {
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinneryTree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const newNode=new TreeNode(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }
//         this.insertNode(this.root,newNode)
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     serch(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(root.value>value){
//                 return this.serch(root.left,value)
//             }else{
//                 return this.serch(root.right,value)
//             }
//         }
//     }
//     preOrder(root){
//         console.log(root.value);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//     }
//     inOrder(root){
//         this.inOrder(root.left)
//         console.log(root.value);
//         this.inOrder(root.right)
//     }
//     postOrder(root){
//         this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.value);
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
//     isEmpty(){
//         return this.root===null
//     }
// }

// class HeapSort{
//     sort(arr){
//         const n=arr.length
//         for(let i=Math.floor(n/2);i>=0;i--){
//             this.heapify(arr,n,i)
//         }
//         for(let i=n-1;i>0;i--){
//             [arr[0],arr[i]]=[arr[i],arr[0]]
//             this.heapify(arr,i,0)
//         }
//         return arr
//     }
//     heapify(arr,n,i){
//         const left=2*i+1
//         const right=2*i+2
//         let largest=i
//         if(left>n && arr[left]>arr[largest]){
//             largest=left
//         }
//         if(right>n && arr[right]>arr[largest]){
//             largest=right
//         }
//         if(largest !== i){
//             [arr[largest],arr[i]]=[arr[i],arr[largest]]
//             this.heapify(arr,n,largest)
//         }
//     }
// }

// const heapSort=new HeapSort()
// let arr=[45,1,5,23,5,4,426,4,54]

// let sort=heapSort.sort(arr)
// console.log(sort);

// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(value){
//         this.heap=[...value]
//         for(let i=0;i<value.length;i++){
//             this.heapifyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             this.heap.pop()
//         }
//         const min=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         while(true){

//             const leftChild=2*index+1
//             const rightChild=2*index+2
//             let smallest=index
//             if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
//                 smallest=leftChild
//             }
//         if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[smallest]){
//             smallest=rightChild
//         }
//         if(smallest !== index){
//             [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
//             index=smallest
//         }else{
//             break
//         }
//         }
//     }
//     heapifyUp(index){
//         while(index>0){
//             const parantIndex=Math.floor((index-1)/2)
//             if(this.heap[index]<this.heap[parantIndex]){
//                 [this.heap[index],this.heap[parantIndex]]=[this.heap[parantIndex],this.heap[index]]
//                 index=parantIndex
//             }else{
//                 break
//             }
//         }
//     }
// }

// class MaxHeap{
//     constructor() {
//         this.heap=[]
//     }
//     buildHeap(value){
//         this.heap=[...value]
//         for(let i=0;i<value.length;i++){
//             this.heapifyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         const max=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return max
//     }
//     heapifyUp(index){
//         while(index>0){
//             const parantIndex=Math.floor((index-1)/2)
//             if(this.heap[index]>this.heap[parantIndex]){
//                 [this.heap[parantIndex],this.heap[index]]=[this.heap[index],this.heap[parantIndex]]
//                 index=parantIndex
//             }else{
//                 break
//             }
//         }
//     }
//     heapifyDown(index){
//         while(true){
//             const leftChild=2*index+1
//             const rightChild=2*index+2
//             const largest=index
//             if(leftChild < this.heap.length && this.heap[largest]>this.heap[largest]){
//                 largest=leftChild
//             }
//             if(rightChild < this.heap.length && this.heap[rightChild]>this.heap[largest]){
//                 largest=rightChild
//             }
//             if(largest !== index){
//                 [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
//                 index=largest
//             }else{
//                 break
//             }
//         }
//     }
// }

// class Graph{
//     constructor(){
//         this.list={}
//     }
//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }
//     addDirect(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//     }
//     addUniDirect(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     display(){
//         for(let x in this.list){
//             console.log(x,[...this.list[x]]);
//         }
//     }
//     hasEdge(vertex1,vertex2){
//         return (this.list[vertex1].has(vertex2))
//     }
//     removeEdge(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         for(let x of this.list[vertex]){
//             this.list[x].delete(vertex)
//         }
//         delete this.list[vertex]
//     }
// }

// class TreeNode {
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class BinneryTree{
//     constructor() {
//         this.root=null
//     }
//     insert(element){
//         const newNode=new TreeNode(element)
//         if(this.isEmpty()){
//             this.root=newNode
//         }
//         this.insertNode(this.root,newNode)
//     }

//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     serch(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value===value){
//                 return true
//             }else if(root.value>value){
//                 this.serch(root.left,value)
//             }else{
//                 this.serch(root.right,value)
//             }
//         }
//         return false
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
    
//     isEmpty(){
//         return this.root===null
//     }
// }

// class HeapSort{
//     sort(arr){
//         let n=arr.length
//         for(let i=Math.floor(n/2)-1;i>=0;i--){
//             this.heapify(arr,n,i)
//         }
//         for(let i=n-1;i>0;i--){
//             [arr[0],arr[i]]=[arr[i],arr[0]]
//             this.heapify(arr,i,0)
//         }
//     }
//     heapify(arr,n,i){
//         const left=2*i+1
//         const right=2*i+2
//         let largest=i
//         if(left<n && arr[left]>arr[largest]){
//             largest=left
//         }
//         if(right<n && arr[right]>arr[largest]){
//             largest=right
//         }
//         if(largest !== i){
//             [arr[largest],arr[i]]=[arr[i],arr[largest]]
//             this.heapify(arr,n,largest)
//         }
//     }
// }

// class minHeap{
//     constructor() {
//         this.heap=[]
//     }
//     buildHeap(value){
//         this.heap=[...value]
//         for(let i=0;i<value.length;i++){
//             this.heapyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapyUp(this.heap.length-1)
//     }
//     heapyDown(index){
//         while(true){
//             const leftChild=2*index+1
//             const rightChild=2*index+2
//             let smallest=index
//             if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
//                 smallest=leftChild
//             }
//             if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[smallest]){
//                 smallest=rightChild
//             }
//             if(smallest !== index){
//                     [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
//                     index=smallest
//             }else{
//                 break
//             }
//         }
//     }
//     heapyUp(index){
//         while(index>0){
//             const parantIndex=Math.floor((index-1)/2)
//             if(this.heap[index]<this.heap[parantIndex]){
//                 [this.heap[index],this.heap[parantIndex]]=[this.heap[parantIndex],this.heap[index]]
//                 index=parantIndex
//             }else{
//                 break;
//             }
//         }
//     }
// }

// class MaxHeap{
//     constructor() {
//         this.heap=[]
//     }
//     buildHeap(value){
//         this.heap=[...value]
//         for(let i=0;i<value.length;i++){
//             this.heapifyDown(i)
//         }
//     }
//     insert(element){
//         this.heap.push(element)
//         this.heapifyUp(this.heap.length-1)
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }else{
//             const max=this.heap[0]
//             this.heap[0]=this.heap.pop(0)
//             this.heapifyDown(0)
//             return max
//         }
//     }
//     heapifyDown(index){
//         while(true){
//             const leftChild=2*index+1
//             const rightChild=2*index+2
//             let largest=index
//             if(leftChild < this.heap.length && this.heap[leftChild]>this.heap[largest]){
//                 largest=leftChild
//             }
//             if(rightChild < this.heap.length && this.heap[rightChild]>this.heap[largest]){
//                 largest=rightChild
//             }
//             if( largest !== index){
//                 [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
//                 index=largest
//             }else{
//                 break
//             }
//         }
//     }
//     heapifyUp(index){
//         while(index>0){
//             const parantIndex = Math.floor((index-1)/2)
//             if(this.heap[index]>this.heap[parantIndex]){
//                 [this.heap[index],this.heap[parantIndex]]=[this.heap[parantIndex],this.heap[index]]
//                 index=parantIndex
//             }else{
//                 break
//             }
//         }
//     }
// }

// class Graph{
//     constructor() {
//         this.list={}
//     }
//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }
//     addDirectEdge(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//     }
//     addUnDirect(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     display(){
//         for(let x in this.list){
//             console.log(x,[...this.list[x]]);
//         }
//     }
//     hashEdge(vertex1,vertex2){
//         return (this.list[vertex1].has(vertex2))
//     }
//     remonveEdge(vertex1,vertex2){
//         this.list[vertex1].delete(vertex2)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return null
//         }
//         for(let x of this.list[vertex]){
//             this.list[x].delete(vertex)
//         }
//     }
// }

// class TreeNode{
//     constructor(value) {
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinneryTree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const newNode=new TreeNode(value)
//         if(this.isEmpty()){
//             this.root=newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }
//     insertNode(root,newNode){
//         if(root.value>newNode.value){
//             if(root.left===null){
//                 root.left=newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }
//     serch(root,value){
//         if(!root){
//             return false
//         }
//         if(root.value===value){
//             return true
//         }else if(root.value>value){
//             this.serch(root.left,value)
//         }else{
//             this.serch(root.right,value)
//         }
//     }
//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             this.min(root.left)
//         }
//     }
//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             this.max(root.right)
//         }
//     }
//     isEmpty(){
//         return this.root===null
//     }
// }

// class HeapSort{
//     sort(arr){
//         let n=arr.length
//         for(let i=Math.floor(n/2)-1;i>=0;i--){
//             this.heapify(arr,n,i)
//         }
//         for(let i=n-1;i>0;i--){
//             [arr[0],arr[i]]=[arr[i],arr[0]]
//             this.heapify(arr,i,0)
//         }
//     }
//     heapify(arr,n,i){
//         const left=2*i+1
//         const right=2*i+2
//         let largest=i
//         if(left<n && arr[left]>arr[largest]){
//             largest=left
//         }
//         if(right<n && arr[right]>arr[largest]){
//             largest=right
//         }
//         if(largest !== i){
//             [arr[largest],arr[i]]=[arr[i],arr[largest]]
//             this.heapify(arr,i,largest)
//         }
//     }
// }
// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }
//     buildHeap(value){
//         this.heap=[...value]
//         for(let i=0;i<value.length;i++){
//             this.heapifyDown(i)
//         }
//     }
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }
//     remove(){
//         if(this.heap.length===0){
//             return null
//         }
//         if(this.heap.length===1){
//             this.heap.pop()
//         }
//         const min=this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return min
//     }
//     heapifyDown(index){
//         while(true){
//             const leftChild=2*index+1
//             const rightChild=2*index+2
//             let smallest=index
//             if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
//                 smallest=leftChild
//             }
//             if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[smallest]){
//                 smallest=rightChild
//             }
//             if(smallest !== index){
//                 [this.heap[smallest],this.heap[index]]=[this.heap[index],this.heap[smallest]]
//                 index=smallest
//             }else{
//                 break
//             }
//         }
//     }
//     heapifyUp(index){
//         while(index>0){
//             const parantIndex=Math.floor((index-1)/2)
//             if(this.heap[index]<this.heap[parantIndex]){
//                 [this.heap[index],this.heap[parantIndex]]=[this.heap[parantIndex],this.heap[index]]
//                 index=parantIndex
//             }else{
//                 break
//             }
//         }
//     }
// }

// class Graph{
//     constructor(){
//         this.list={}
//     }
//     addVertex(vertex){
//         if(!this.list[vertex]){
//             this.list[vertex]=new Set()
//         }
//     }
//     addDirectEdge(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//     }
//     addUniDirectEddge(vertex1,vertex2){
//         if(!this.list[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.list[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.list[vertex1].add(vertex2)
//         this.list[vertex2].add(vertex1)
//     }
//     display(){
//         for(let x in this.list){
//             console.log(x,[...this.list[x]]);
//         }
//     }
//     hasEdge(vertex1,vertex2){
//         return (this.list[vertex1].has(vertex2))
//     }
//     removeEdge(vertex1,vertex2){
//         this.list[vertex1].delete(vertex1)
//         this.list[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.list[vertex]){
//             return null
//         }
//         for(let x of this.list[vertex]){
//             this.list[x].delete(vertex)
//         }
//         delete this.list[vertex]
//     }
// }

// class TreeNode{
//     constructor(key) {
//         this.key=key
//         this.left=null
//         this.right=null
//     }
// }
// function isBST(root,minVal=Number.MIN_SAFE_INTEGER,maxVal=Number.MAX_SAFE_INTEGER){
//     if(root===null){
//         return true
//     }
//     if(!(minVal<root.key && maxVal>root.key)){
//         return false
//     }
//     return (
//         isBST(root.left,minVal,root.key) &&
//         isBST(root.right,root.key,maxVal)
//     )
// }
// const root=new TreeNode(2)
// root.left=new TreeNode(5)
// root.right=new TreeNode(3)

// const result=isBST(root)
// if(result){
//     console.log("Is BST");
// }else{
//     console.log("Not BST");
// }

// class TreeNode{
//     constructor(value) {
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// function hasCycle(root){
//     const visited=new Set()
//     function dfs(node,parent){
//         if(!node){
//             return false
//         }
//         if(visited.has(node)){
//             return true
//         }
//         visited.add(node)
//         const leftcycle=dfs(node.left,node)
//         const rightcycle=dfs(node.right,node)

//         return leftcycle||rightcycle||(parent && parent===node)
//     }
//     return dfs(root,null)
// }
