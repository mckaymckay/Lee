/**
 * 创建单链表
 * createLinkedList(arr)：将数组转换为一条单链表
 */

export class ListNode {
    constructor(x) {
        this.val = x
        this.next = null
    }
}

export const createLinkedList = (arr) => {
    if (arr == null || arr.length == 0) {
        return null
    }
    const head = new ListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }
    return head
}

/**
 * 创建双链表
 * createDoublyLinkedList(arr)：将数组转为一条双链表
 */

export class DoublyListNode {
    constructor(x) {
        this.val = x
        this.next = this.prev = null
    }
}

export const createDoublyLinkedList = (arr) => {
    if (arr == null || arr.length == 0) {
        return null
    }
    const head = new DoublyListNode(arr[0])
    let cur = head
    for (let i = 1; i < arr.length; i++) {
        const newNode = new DoublyListNode(arr[i])
        cur.next = newNode
        newNode.prev = cur
        cur = cur.next
    }
    return head
}