function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>curr){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=curr
    }
    return arr
}


let arr=[4,5,8,1,3,7,2,9,62,1]
console.log(...insertionSort(arr));
