import { ListNode, createLinkedList } from './index.js'

/**
 * 单链表的增删改查
 * https://labuladong.online/algo/data-structure-basic/cycle-array/
 */


// 创建一条单链表
let head = createLinkedList([10, 20, 30, 40, 50])
console.log(head)

// 1. 查/改 -- 遍历单链表
for (let p = head; p !== null; p = p.next) {
    console.log(p.val)
}

// 2.1 增 -- 头插
var newNode = new ListNode(0)
newNode.next = head
head = newNode
console.log(head)

// 2.2 增 -- 尾插
var cur = head
while (cur.next) {
    cur = cur.next
}
cur.next = new ListNode(60)
console.log(head)

// 2.3 增 -- 中插 在第 2 个节点后面插入一个新节点 66
var newNode = new ListNode(66)
var cur = head
for (var i = 0; i < 1; i++) { // 找到前驱节点 🌟
    cur = cur.next
}
newNode.next = cur.next
cur.next = newNode

// 3.1 删 -- 头删
head = head.next
console.log(head)

// 3.2 删 -- 尾删
var cur = head
while (cur.next.next) {
    cur = cur.next
}
cur.next = null
console.log(head)

// 3.3 删 -- 中删 -- 删除第 4 个节点
var cur = head
for (let i = 0; i < 2; i++) { // 🌟🌟
    cur = cur.next
}
cur.next = cur.next.next
console.log(head)


