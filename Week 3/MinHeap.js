class MinHeap{
    constructor(){
        this.heap=[]
    }
    buildHeap(value){
        this.heap=[...value]
        for(let i=0;i<value.length;i++){
            this.heapifyDown(i)
        }
    }
    insert(element){
        this.heap.push(element)
        this.heapifyUp(this.heap.length-1)
    }
    // remove(){
    //     if(this.heap.length===0){
    //         return null
    //     }
    //     if(this.heap.length===1){
    //         this.heap.pop()
    //     }
    //     const min=this.heap[0]
    //     this.heap[0]=this.heap.pop()
    //     this.heapifyDown(0)
    //     return min
    // }
    heapifyDown(index){
        while(true){
            const leftChild=2*index+1
            const rightChild=2*index+2
            let smallest=index
            if(leftChild<this.heap.length && this.heap[leftChild]<this.heap[smallest]){
                smallest=leftChild
            }
            if(rightChild<this.heap.length && this.heap[rightChild]<this.heap[smallest]){
                smallest=rightChild
            }
            if(index !== smallest){
                [this.heap[index],this.heap[smallest]]=[this.heap[smallest],this.heap[index]]
                index=smallest
            }else{
                break
            }
        }
    }
    heapifyUp(index){
        while(index>0){
            const parantIndex=Math.floor((index-1)/2)
            if(this.heap[index]<this.heap[parantIndex]){
                [this.heap[index],this.heap[parantIndex]]=[this.heap[parantIndex],this.heap[index]]
                index=parantIndex
            }else{
                break
            }
        }
    }
}
const minHeap=new MinHeap()
minHeap.buildHeap([2,9,4,63,7,3,5,8,4,8])
console.log("Min Heap",minHeap.heap);
minHeap.insert(0)
console.log("Min Heap after Insert:", minHeap.heap); 
console.log("Removed Min Element:", minHeap.remove());
console.log("Min Heap after Removal:", minHeap.heap);