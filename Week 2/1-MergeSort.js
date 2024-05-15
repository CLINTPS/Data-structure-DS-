function MergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    const middle=Math.floor(arr.length/2)
    const leftArray=arr.slice(0,middle)
    const rightArray=arr.slice(middle)

    return merge(MergeSort(leftArray),MergeSort(rightArray))
}

function merge(leftArray,rightArray){
    const sortArray=[]
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            sortArray.push(leftArray.shift())
        }else{
            sortArray.push(rightArray.shift())
        }
    }
    return [...sortArray,...leftArray,...rightArray]
}

let arr=[45,8,6,1,-8,21,88]
console.log('merge',...MergeSort(arr));

