// 基本的二叉树节点
export class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// 将数组创建为二叉树
export const createBinaryTree = (arr) => {
    if (!arr.length) return null

    const root = new TreeNode(arr[0])
    const queue = [root]

    let i = 1
    while (i < arr.length) {
        const cur = queue.shift()

        // 创建左子节点
        if (arr[i] !== null) {
            cur.left = new TreeNode(arr[i])
            queue.push(cur.left)
        }
        i++

        // 创建右子节点
        if (arr[i] !== null && i < arr.length) {
            cur.right = new TreeNode(arr[i])
            queue.push(cur.right)
        }
        i++
    }
    return root
}

const arr = [3, 9, 20, null, null, 15, 7]
const root = createBinaryTree(arr)
console.log(root)


// 递归遍历框架
var traverse = function (root) {
    if (root === null) return

    // 前序遍历位置
    traverse(root.left)
    // 中序遍历位置
    traverse(root.right)
    // 后序遍历位置
}


// 层序遍历 写法二【记录当前遍历的层数】
var levelOrderTraverse = function (root) {
    if (root === null) return

    let q = []
    q.push(root)

    let depth = 1 // 记录当前遍历的层数
    while (q.length !== 0) {
        let sz = q.length // 要记录下最初的长度，因为循环过程中长度会变
        for (let i = 0; i < sz; i++) {
            let cur = q.shift()
            console.log("depth = " + depth + ", val = " + cur.val); // 访问 cur 节点，同时知道它所在的层数

            if (cur.left !== null) q.push(cur.left)
            if (cur.right !== null) q.push(cur.right)
        }
        depth++
    }
}