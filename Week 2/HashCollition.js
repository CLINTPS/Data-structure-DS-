class Node{
    constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
    }
}
class HashTable{
    constructor(size){
        this.size=size
        this.table=new Array(size).fill(null).map(()=>[])
    }
    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index=this.hash(key)
        const bucket=this.table[index]
        for(let i=0;i<bucket.length;i++){
            if(bucket[i].key===key){
                bucket[i].value=value
                return;
            }
        }
        const newNode=new Node(key,value)
        bucket.push(newNode)
    }
    get(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        for(let i=0;i<bucket.length;i++){
            if(bucket[i].key===key){
                return bucket[i].value
            }
        }
        return null
    }
    remove(key){
        const index=this.hash(key)
        const bucket=this.table[index]
        for(let i=0;i<bucket.length;i++){
            if(bucket[i].key===key){
                bucket.splice(i,1)
                return
            }
        }
    }
    display(){
        for(let i=0;i<this.size;i++){
            for(const node of this.table[i]){
                console.log(`${node.key}:${node.value}`);
            }
        }
    }
}

const hashTable = new HashTable(10);
hashTable.insert('name', 'John');
hashTable.insert('age', 25);
hashTable.insert('city', 'New York');
hashTable.print();
hashTable.insert('mane', 'Clint');
console.log('Get age:', hashTable.get('age'));
hashTable.remove('age');
console.log('After removing age:');
hashTable.print();





// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key,value){
//         const index=this.hash(key)
//         // this.table[index]=value
//         const bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             const sameKetItem=bucket.find(item => item[0]===key)
//             if(sameKetItem){
//                 sameKetItem[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index=this.hash(key)
//         // return this.table[index]
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKetItem=bucket.find(item => item[0]===key)
//             if(sameKetItem){
//                 return sameKetItem[1]
//             }
//         }
//         return undefined
//     }
//     remove(key){
//         const index=this.hash(key)
//         // this.table[index]=undefined
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKetItem=bucket.find(item => item[0]===key)
//             if(sameKetItem){
//                 bucket.splice(bucket.indexOf(sameKetItem),1)
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }

// const table=new HashTable(50)
// table.set("name","Clint")
// table.set("mane","Mammuti")
// table.display()
