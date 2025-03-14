
/**
 * 题目链接：
 * 
 * 题目描述：验证两棵树是否相同
 * 
 */

import { TreeNode, createTree, printTree } from "./utils.js"

const root1 = [1, 2, 3]
const root2 = [1, 2, 3]

const p = createTree(root1)
const q = createTree(root2)

// 输入：p = [1,2,3], q = [1,2,3]
// true

// 输入：p = [1,2], q = [1,null,2]
// false

// 输入：p = [1,2,1], q = [1,1,2]
// false

// ----------------------------------------------------------------------------------

/**
 * 解法一： 深度优先遍历
 * 时间复杂度：O(min(m,n))
 * 空间复杂度：O(min(m,n))
 */
function isSameTree (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false  // 漂亮！
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

var res1 = isSameTree(p, q)
console.log('res1:', res1)

// ----------------------------------------------------------------------------------

/**
 * 解法二： 广度优先遍历
 * 时间复杂度：O(min(m,n))
 * 空间复杂度：O(min(m,n))
 */
function isSameTree2 (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false  // 漂亮！

  const queue1 = [p]
  const queue2 = [q]
  while (queue1.length && queue2.length) {
    if (queue1.length !== queue2.length) return false

    const size = queue1.length
    for (let i = 0; i < size; i++) {
      const node1 = queue1.shift()
      const node2 = queue2.shift()
      if (node1.val !== node2.val) return false
      if (node1.left && node2.left) {
        queue1.push(node1.left)
        queue2.push(node2.left)
      } else if (node1.left || node2.left) {
        // 注意这个else if的条件没有！
        return false
      }
      if (node1.right && node2.right) {
        queue1.push(node1.right)
        queue2.push(node2.right)
      } else if (node1.right || node2.right) {
        return false
      }
    }
  }
  return true
};

var res2 = isSameTree2(p, q)
console.log('res2:', res2)

// ----------------------------------------------------------------------------------

/**
 * 解法三： 优先遍历
 * 时间复杂度：O(min(m,n))
 * 空间复杂度：O(min(m,n))
 */
function isSameTree3 (p, q) {
  if (!p && !q) return true
  if (!p || !q) return false  // 漂亮！

  const queue = [[p, q]]
  while (queue.length) {
    const [node1, node2] = queue.shift()
    if (node1.val !== node2.val) return false

    if (node1.left || node2.left) {
      if (!node1.left || !node2.left) return false // 注意
      queue.push([node1.left, node2.left])
    }

    if (node1.right || node2.right) {
      if (!node1.right || !node2.right) return false // 注意
      queue.push([node1.right, node2.right])
    }
  }
  return true
};

var res3 = isSameTree3(p, q)
console.log('res3:', res3)

// ----------------------------------------------------------------------------------


// 复习：
function test () {

}

