function treenode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}

function arrtotree(arr){
    let queue = [];
    let root = new treenode(arr.slice()[0]);
    queue[0] = root;
    arr.shift();
    // console.log('now root = ',queue[0]);
    while (arr.length !== 0) {
        if (queue[0].left !== null && queue[0].right !== null) {
            queue.shift();
        }else if (queue[0].left === null) {
            let leftnode = new treenode(arr.slice()[0]);
            queue[0].left = leftnode;
            queue.push(leftnode);
            arr.shift();
            // console.log('');
            // console.log('enter left');
            // console.log('now queue[0]',queue[0]);
        }else{
            let rightnode = new treenode(arr.slice()[0]);
            queue[0].right = rightnode;
            queue.push(rightnode);
            arr.shift();
            // console.log('');
            // console.log('enter right');
            // console.log('now queue[0]',queue[0]);
        }
    }
    return root;
}

let arr = [2, 4, 2, 1, 5, 2, 1, 5,4,3,2,1,5,3,1,5];
// let Queue = [];
console.log(arrtotree(arr));
