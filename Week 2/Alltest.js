function quick(arr){
    if(arr.length<=1){
        return arr
    }
    let curr=arr[0]
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<curr){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),curr,...quick(right)]
}

let arr=[5,3,7,4,9,10]
console.log(quick(arr));