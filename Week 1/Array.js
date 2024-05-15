function res(arr,t){
    let i=0
    let j=arr.length-1
    while(i<j){
     while(i<j && arr[j]===t){
         j--;
     }
     if(arr[i]===t){
         const temp = arr[j]
         arr[j]=arr[i];
         arr[i]=temp
     }
     i++
    }
    return arr
 }


let arr=[6,5,10,4,3,9,10,8,10]
let t=10
console.log(...res(arr,t));
