class HeapSort{
    sort(arr){
        const n=arr.length;
        for(let i=Math.floor(n/2)-1;i>=0;i--){
            this.heapify(arr,n,i)
        }
        for(let i=n-1;i>0;i--){
            [arr[0],arr[i]]=[arr[i],arr[0]]
            this.heapify(arr,i,0)
        }
        return arr
    }
    heapify(arr,n,i){
        const left=2*i+1
        const right=2*i+2
        let largest=i
        if(left<n && arr[left]>arr[largest]){
            largest=left
        }
        if(right<n && arr[right]>arr[largest]){
            largest=right
        }
        if(i !== largest){
            [arr[i],arr[largest]]=[arr[largest],arr[i]]
            this.heapify(arr,n,largest)
        }
    }
}   

const heapSort=new HeapSort()
const unsortedArray=[5,8,6,4,8,4,78,56,4,89,458,5]
const ans=heapSort.sort(unsortedArray)
console.log(ans);