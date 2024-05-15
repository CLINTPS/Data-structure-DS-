function linearSerch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return null
}

    let arr=[1,2,3,4,5,6,7,8,9,10]
    let target=6

    console.log('Target value index is :',linearSerch(arr,target));