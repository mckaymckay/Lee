/**
 * 题目链接：
 * 
 * 题目描述：二叉树的最大深度
 * 
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 * 
 */

import { TreeNode, createTree, printTree } from "./utils.js"

const root1 = [3, 9, 20, null, null, 15, 7]
const root2 = [1, null, 2]
const root3 = []

const root = createTree(root1)

// 输入：root = [3,9,20,null,null,15,7]
// 3

// 输入：root = [1,null,2]
// 2

// 输入：root = []
// 0

// ----------------------------------------------------------------------------------

/**
 * 方法一： 深度优先遍历（DFS）
 * 时间复杂度：O(n)
 * 空间复杂度：O(h)
 */
function maxDepth (root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  if (!root.left) return maxDepth(root.right) + 1
  if (!root.right) return maxDepth(root.left) + 1

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var res1 = maxDepth(root)
console.log('res1:', res1)

// ----------------------------------------------------------------------------------


/**
 * 方法二： 广度优先遍历（BFS）
 * 时间复杂度：
 * 空间复杂度：
 * 
 */

function maxDepth2 (root) {
  if (!root) return 0
  const queue = [root]
  let depth = 0

  //  while循环执行一次就是处理某一层的节点
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      // 注意和最小深度的不同
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  return depth
}

var res2 = maxDepth2(root)
console.log('res2:', res2)


// 复习：
function test () {

}

