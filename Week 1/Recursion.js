function recursion(value){
        if(value<=1){
            return 1
        }
        return value+recursion(value-1)
}

let a=10
console.log('Total:',recursion(a));

//fibinochi

function fibinochi(v){
    if(v<=1){
        return 1
    }
    return fibinochi(v-1)+fibinochi(v-2)
}

//factorial

function factorial(v){
    if(v<=1){
        return 1
    }
    return v+factorial(v-1)
}

let b=10
console.log(fibinochi(b));
console.log(factorial(b));
