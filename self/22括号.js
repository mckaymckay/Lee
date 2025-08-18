function isValid(s) {
    const stack = []
    const map = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    // 遍历字符串中的每个字符
    for (let i of s) {
        // 为左括号，入栈
        if (i in map) {
            stack.push(i)
        } else {
            // 右括号，出栈匹配
            const val = stack.pop()
            if (!val || map[val] !== i) return false
        }
    }
    // 栈为空，说明匹配成功
    return stack.length === 0
}

let s = "()[]{}"
let s1 = "([)]"
console.log(isValid(s))
console.log(isValid(s1))