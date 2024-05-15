class TreeNode {
    constructor(value) {
        this.value=value
        this.left=null
        this.right=null
    }
}
function hasCycle(root){
    const visited=new Set()
    function dfs(node,parent){
        if(!node){
            return false
        }
        if(visited.has(node)){
            return true
        }
        visited.add(node)
        const leftcycle=dfs(node.left,node)
        const rightcycle=dfs(node.right,node)

        return leftcycle || rightcycle||(parent && parent===node)
    }
    return dfs(root,null)
}

const rootNode=new TreeNode(1)
rootNode.left=new TreeNode(2)
rootNode.right=new TreeNode(3)
rootNode.left.left=new TreeNode(4)
rootNode.right.right= rootNode

console.log(hasCycle(rootNode));