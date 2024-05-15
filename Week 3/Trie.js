class TrieNode{
    constructor(){
        this.children=new Map()
        this.isEndofWord=false
    }
}

class Trie{
    constructor() {
        this.root=new TrieNode()
    }

    insert(word){
        let current=this.root
        for(let char of word){
            if(!current.children.has(char)){
                current.children.set(char,new TrieNode())
            }
            current=current.children.get(char)
        }
        current.isEndofWord=true
    }
    serch(word){
        let current=this.root
        for(let char of word){
            if(!current.children.has(char)){
                return false
            }
            current=current.children.get(char);
        }
        return current.isEndofWord;
    }
    delete(word){
        this.deleteRecursive(this.root,word,0)
    }

    deleteRecursive(node ,word,index){
        if(!node){
            return
        }
        if(index === word.length){
            if(node.isEndofWord){
                node.isEndofWord=false
            }
            return node.children.size === 0 
        }
        const char=word[index]
        const childNode=node.children.get(char)
        if(!childNode){
            return false
        }

        const shouldDeleteNode=this.deleteRecursive(childNode,word,index+1)
        
        if(shouldDeleteNode){
            node.children.delete(char)
            return node.children.length === 0
        }
        return false
    }
    getWordPrifix(prefix){
        const current= this.root
        for(let char of prefix){
            if(!current.children.has(char)){
                return []
            }
            current=current.children.get(char)
        }
        const words=[]
        this.collectWord(current,prefix,words)
        return words
    }
    collectWord(node,currentWord,result){
        if(node.isEndOfWord){
            result.push(currentWord)
        }
        for(let [char,childNode] of node.childNode){
            this.collectWord(childNode,currentWord+char,result)
        }
    }
}

const trie=new Trie()
trie.insert("Apple")
trie.insert("App")

console.log(trie.serch("Apple"));
trie.delete("App")
console.log(trie.serch("App"));


