function SelectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let val=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[val]){
                val=j
            }
        }
        let temp=arr[val]
        arr[val]=arr[i]
        arr[i]=temp
    }   
    return arr
}

let a=[5,8,1,3,7,5,9,4,6,1,2,3]
console.log(...SelectionSort(a));

