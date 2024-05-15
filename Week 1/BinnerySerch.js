function BinnerSerch(arr,value){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(arr[middle]==value){
            return middle
        }
        if(value<arr[middle]){
            right=middle-1
        }else{  
            left=middle+1
        }
    }
    return null
}

let arr=[1,2,3,4,5,6,7,8,9,10]
let target=7

console.log('Target value index is :',BinnerSerch(arr,target));

