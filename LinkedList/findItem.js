import { ListNode, createLinkedList } from './index.js'

// 创建一条单链表
let head = createLinkedList([10, 20, 30, 40, 50])
console.log(head)

// 遍历单链表
for (let p = head; p !== null; p = p.next) {
    console.log(p.val)
}