class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function BFS_Stack(root) {
    if (!root) {
        return;
    }

    let stack1 = [root];
    let stack2 = [];

    while (stack1.length > 0) {
        while (stack1.length > 0) {
            let current = stack1.pop();
            console.log(current.value);
            if (current.left) {
                stack2.push(current.left);
            }
            if (current.right) {
                stack2.push(current.right);
            }
        }
        [stack1, stack2] = [stack2, stack1];
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

BFS_Stack(root);

