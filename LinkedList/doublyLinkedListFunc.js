import { DoublyListNode, createDoublyLinkedList } from "./index.js";


/**
 * 双链表的增删改查
 * https://labuladong.online/algo/data-structure-basic/linkedlist-basic/
 */

// 创建一条双链表
let head = createDoublyLinkedList([10, 20, 30, 40, 50])
// console.log(head)

let tail = null
// 1.1 查/改 -- 从头遍历双链表

for (let cur = head; cur != null; cur = cur.next) {
    console.log(cur.val)
    tail = cur
}
// 1.2 查/改 -- 从尾遍历双链表
for (let cur = tail; cur != null; cur = cur.prev) {
    console.log(cur.val)
}

// 2.1 增 -- 头插
var newNode = new DoublyListNode(0)
newNode.next = head
head.prev = newNode
head = newNode

// 2.2 增 -- 尾插
var cur = head
var newNode = new DoublyListNode(60)
while (cur.next) {
    cur = cur.next
}
cur.next = newNode
newNode.prev = cur
console.log(head)

// 2.3 增 -- 中插 在第 3 个节点后面插入一个新节点 66
var cur = head
for (let i = 0; i < 2; i++) {
    cur = cur.next
}
var newNode = new DoublyListNode(66)
newNode.next = cur.next
cur.next.prev = newNode
cur.next = newNode
newNode.prev = cur
console.log(head)

// 3.1 删 -- 头删
head = head.next
head.prev = null
console.log(head)

// 3.2 删 -- 尾删
var cur = head
while (cur.next.next) [
    cur = cur.next
]
cur.next.prev = null
cur.next = null
console.log(head)


// 3.3 删 -- 中删 -- 删除第 4 个节点
var cur = head
for (let i = 0; i < 2; i++) {
    cur = cur.next
}
var deleteNode = cur.next
cur.next = deleteNode.next
deleteNode.next.prev = cur

deleteNode.prev = null
deleteNode.next = null

console.log(head)