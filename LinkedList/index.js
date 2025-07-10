// 创建单链表

export class ListNode {
    constructor(x) {
        this.val = x
        this.next = null
    }
}

// 输入一个数组，转换为一条单链表
export const createLinkedList = function (arr) {
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