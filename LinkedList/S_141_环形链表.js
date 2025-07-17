var hasCycle = function (head) {
    let fast = low = head
    while (fast !== null && fast.next !== null) {
        low = low.next
        fast = fast.next.next
        if (fast === low) return true
    }
    return false
};