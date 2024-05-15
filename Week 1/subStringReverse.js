let str='MY NAME IS CLINT PS'
let str1='MY NAME IS CLINT PS'

// let str4=str.split(' ')
// console.log(str4);
for(let i=0;i<str1.length;i++){
    str1[i]=str1[i].split(' ').reverse().join(' ')
}
let str2=str1.join(' ')
console.log(str2);

// let temp=str1[0]
// str1[0]=str1[str1.length-1]
// str1[str1.length-1]=temp

// let str2=str1.join(' ')
// console.log(str2);
// let str3=str.concat(' ',str1).toLowerCase().replace('my','I')
// console.log(str3);