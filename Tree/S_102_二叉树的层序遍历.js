
/**
 * 题目链接：
 * 
 * 题目描述：二叉树的层序遍历
 * 
 * 返回其节点值的 层序遍历
 * 
 */

import { TreeNode, createTree, printTree } from "./utils.js"

const root1 = [3, 9, 20, null, null, 15, 7]
const root2 = [1, 2, 2, 3, 3, null, null, 4, 4]
const root3 = []

const root = createTree(root2)

// 输入：root = [3,9,20,null,null,15,7]
// [[3],[9,20],[15,7]]

// 输入：root = [1]
// [[1]]

// 输入：root = []
// []

// ----------------------------------------------------------------------------------

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function levelOrder (root) {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length) {
    const len = queue.length
    res.push([])
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
};

var res1 = levelOrder(root)
console.log('res1:', res1)

// ----------------------------------------------------------------------------------


// 复习：
function test () {

}

