export class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// 创建树的辅助函数
export function createTree (values) {
  if (!values.length) return null

  const root = new TreeNode(values[0])
  const queue = [root]
  let i = 1

  while (queue.length && i < values.length) {
    const node = queue.shift()
    // 左子节点
    if (i < values.length && values[i] !== null) {
      node.left = new TreeNode(values[i])
      queue.push(node.left)
    }
    i++
    // 右子节点
    if (i < values.length && values[i] !== null) {
      node.right = new TreeNode(values[i])
      queue.push(node.right)
    }
    i++
  }
  return root
}

// 打印树的辅助函数
export function printTree (root, prefix = '', isLeft = true) {
  if (!root) {
    console.log('空树')
    return
  }
  console.log(prefix + (isLeft ? '├── ' : '└── ') + root.val);

  if (root.left) {
    printTree(root.left, prefix + (isLeft ? '│   ' : '    '), true);
  }

  if (root.right) {
    printTree(root.right, prefix + (isLeft ? '│   ' : '    '), false);
  }
}