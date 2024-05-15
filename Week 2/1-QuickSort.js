function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pre=arr[0]
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(pre>arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pre,...quickSort(right)]
}

let arr=[45,8,6,1,-8,21,88]
console.log(...quickSort(arr));
