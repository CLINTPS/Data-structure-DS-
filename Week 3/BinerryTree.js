    class TreeNode{
        constructor(value) {
            this.value=value
            this.left=null
            this.right=null
        }
    }
    class BinneryTree{
        constructor(){
            this.root=null
        }
        insert(value){
            const newNode=new TreeNode(value)
            if(this.isEmpty()){
                this.root=newNode
            }else{
                this.insertNode(this.root,newNode)
            }
        }
        insertNode(root,newNode){
            if(root.value > newNode.value){
                if(root.left===null){
                    root.left=newNode
                }else{
                    this.insertNode(root.left,newNode)
                }
            }else{
                if(root.right===null){
                    root.right=newNode
                }else{
                    this.insertNode(root.right,newNode)
                }
            }
        }
        serch(root,value){
            if(!root){
                return false
            }else{
                if(root.value===value){
                    return true
                }else if(value<root.value){
                    return this.serch(root.left,value)
                }else{
                    return this.serch(root.right,value)
                }
            }
        }
        preOrder(root){
            if(root){
                console.log(root.value);
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        }
        inOrder(root){
            if(root){
                this.inOrder(root.left)
                console.log(root.value);
                this.inOrder(root.right)
            }
        }
        postOrder(root){
            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)
                console.log(root.value);
            }
        }
        min(root){
            if(!root.left){
                return root.value
            }else{
                return this.min(root.left)
            }
        }
        max(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }
        isEmpty(){
            return this.root===null
        }
    }

    const bst=new BinneryTree()
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)

    console.log(bst.serch(bst.root,10));
    console.log(bst.serch(bst.root,11));
    bst.preOrder(bst.root)
    bst.inOrder(bst.root)
    bst.postOrder(bst.root)
    console.log(bst.min(bst.root));
    console.log(bst.max(bst.root));

