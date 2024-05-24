function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}
function heapify(arr,n,i){
    let large=i
    let left=2*i+1
    let right=2*i+2
    if(left<n && arr[left]>arr[large]){
        large=left
    }
    if(right<n && arr[right]>arr[large]){
        large=right
    }
    if(large !==i){
        [arr[i],arr[large]]=[arr[large],arr[i]]
        heapify(arr,i,large)
    }
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(...heapSort(arr));