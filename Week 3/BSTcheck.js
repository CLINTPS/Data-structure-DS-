class TreeNode{
    constructor(key) {
        this.key=key
        this.left=null
        this.right=null
    }
}

function isBST(root,minVal=Number.MIN_SAFE_INTEGER,maxVal=Number.MAX_SAFE_INTEGER){
    if(root === null){
        return true
    }
    if(!(minVal<root.key && maxVal>root.key)){
        return false
    }
    return (
        isBST(root.left,minVal,root.key) &&
        isBST(root.right,root.key,maxVal)
    )
}

const root=new TreeNode(3)
root.left=new TreeNode(2)
root.right=new TreeNode(4)

const result=isBST(root)

if(result){
    console.log("It is BST");
}else{
    console.log("It is not BST");
}