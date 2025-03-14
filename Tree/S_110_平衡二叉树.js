/**
 * 题目链接：
 * 
 * 题目描述：判断是否是平衡二叉树
 * 
 * 平衡二叉树定义：一个二叉树的每个节点的左右两个子树的高度差的绝对值不超过1
 * 
 */

import { TreeNode, createTree, printTree } from "./utils.js"

const root1 = [3, 9, 20, null, null, 15, 7]
const root2 = [1, 2, 2, 3, 3, null, null, 4, 4]
const root3 = []

const root = createTree(root2)

// 输入：root = [3,9,20,null,null,15,7]
// 输出：true

// 输入：root = [1,2,2,3,3,null,null,4,4]
// 输出：false

// 输入：root = []
// 输出：true

// ----------------------------------------------------------------------------------

/**
 * 方法一： 自上而下的递归
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */
function isBalanced (root) {
  // 1. 空树是平衡的
  if (!root) return true

  // 2. 计算左右子树高度
  const getHeight = (node) => {
    if (!node) return 0
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1
  }

  // 3. 判断是否平衡
  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
    && isBalanced(root.left)
    && isBalanced(root.right);
};

var res1 = isBalanced(root)
console.log('res1:', res1)

// ----------------------------------------------------------------------------------


/**
 * 方法一： 自下而上的递归
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(n)
 */

function isBalanced2 (root) {
  // 返回-1表示不平衡，否则返回树的高度
  function getHeight (node) {
    if (!node) return 0

    const leftHeight = getHeight(node.left)
    const rightHeight = getHeight(node.right)

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1
    }

    return Math.max(leftHeight, rightHeight) + 1
  }
  // 如果返回-1则不平衡，否则平衡
  return getHeight(root) !== -1
}

var res2 = isBalanced2(root)
console.log('res2:', res2)

// ----------------------------------------------------------------------------------


// 复习：
function test () {

}

