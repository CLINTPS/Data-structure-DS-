class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function DFS_Stack(root){
    if(!root)return
    let stack=[root]
    while(stack.length>0){
        let curr=stack.pop()
        console.log(curr.value);
        if(curr.right){
            stack.push(curr.right)
        }
        if(curr.left){
            stack.push(curr.left)
        }
    }
}
let root=new TreeNode(1)
root.left=new TreeNode(2)
root.right=new TreeNode(3)
root.left.left=new TreeNode(4)
root.left.right=new TreeNode(5)
root.right.left=new TreeNode(6)
root.right.right=new TreeNode(7)
DFS_Stack(root)