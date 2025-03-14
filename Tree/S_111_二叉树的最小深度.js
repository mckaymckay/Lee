/**
 * 题目链接：
 * 
 * 题目描述：给定一个二叉树，找出其最小深度
 * 
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量
 * 
 */

import { TreeNode, createTree, printTree } from "./utils.js"

const root1 = [3, 9, 20, null, null, 15, 7]
const root2 = [2, null, 3, null, 4, null, 5, null, 6]
const root3 = [1, 2, 3, 4, 5]

const root = createTree(root3)

// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

// 输入：root =[2,null,3,null,4,null,5,null,6]
// 5

// 输入：root = []
// 0

// ----------------------------------------------------------------------------------

/**
 * 方法一： 深度优先（DFS）
 * 时间复杂度：O(n)
 * 空间复杂度：O(h)
 */
function minDepth (root) {
  if (!root) return 0

  if (!root.left && !root.right) return 1
  if (!root.right) return minDepth(root.left) + 1
  if (!root.left) return minDepth(root.right) + 1

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

var res1 = minDepth(root)
console.log('res1:', res1)

// ----------------------------------------------------------------------------------


/**
 * 方法二： 广度优先（BFS）
 * -- 当找到一个叶子节点时，直接返回其深度，即是最小深度，因为广度优先遍历是逐层遍历的，保证最先搜到的叶子节点的深度一定最小
 * 时间复杂度：O(n)
 * 空间复杂度：O(w)
 */

function minDepth2 (root) {
  if (!root) return 0
  const queue = [root]
  let depth = 1
  while (queue.length) {
    // 注意这里queue.length是变化的，所以for循环里不能直接用queue.length
    const size = queue.length
    // 通过for循环处理每层的节点
    for (let i = 0; i < size; i++) {
      const node = queue.shift()

      if (!node.left && !node.right) return depth

      if (node.left) queue.push(node.left)

      if (node.right) queue.push(node.right)
    }
    depth++

  }
  return depth
}

var res2 = minDepth2(root)
console.log('res2:', res2)


/**
 * 方法三： 层序遍历
 * 时间复杂度：O(n)
 * 空间复杂度：O(w)
 */
function minDepth3 (root) {
  if (!root) return 0

  const queue = [[root, 1]]
  while (queue.length) {
    const [node, depth] = queue.shift()

    if (!node.left && !node.right) return depth
    if (node.left) queue.push([node.left, depth + 1])
    if (node.right) queue.push([node.right, depth + 1])
  }
}

var res3 = minDepth3(root)
console.log('res3:', res3)

// ----------------------------------------------------------------------------------


// 复习：
function test () {

}

