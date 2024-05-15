function binnery(arr,target){
    return serch(arr,target,0,arr.length-1)
}

function serch(arr,target,left,right){
    
    let midle=Math.floor((left+right)/2)
    if(arr[midle]== target){
        return midle
    }
    if(target>arr[midle]){
        return serch(arr,target,midle+1,right)
    }else{
        return serch(arr,target,left,midle-1)
    }
}

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(binnery(arr,9));
