function TreeNode(val) {
    * this.val = val;
    * this.left = this.right = null;
    *
}

function levelOrder(arr) {
    let root = arr[0];
    arr.shift();
    let res = [];
    return helper(root, res, arr, height);
}

function helper(root, res, arr, height) {
    if (root === null) {
        return;
    }
    helper(root.left,res,arr.slice(1),height+1);
    helper(root.right,res,arr.slice(1),height+1);
}
