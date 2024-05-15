class MaxHeap{
    constructor(){
        this.heap=[]
    }
    buildHeap(value){
        this.heap=[...value]
        for(let i=0;i<value.largest;i++){
            this.heapifyDown(i)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    remove(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        const Max=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heap.heapifyDown(0)
        return Max
    }
    heapifyUp(index){
        while(index>0){
            const parantIndex=Math.floor((index-1)/2)
            if(this.heap[parantIndex]<this.heap[index]){
                [this.heap[parantIndex],this.heap[index]]=[this.heap[index],this.heap[parantIndex]]
                index=parantIndex
            }else{
                break
            }
        }
    }
    heapifyDown(index){
        while(true){
            const leftChild= 2*index+1
            const rightChild= 2*index+2
            let largest=index
            if(leftChild < this.heap.length && this.heap[leftChild]>this.heap[largest]){
                largest=leftChild
            }
            if(rightChild<this.heap.length && this.heap[rightChild]>this.heap[largest]){
                largest=rightChild
            }
            if(index !== largest){
                [this.heap[index],this.heap[largest]]=[this.heap[largest],this.heap[index]]
               index=largest
            }else{
                break
            }
        }
    }

}