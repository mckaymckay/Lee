
// 题目： 定义函数 ⁠countUniqueChars(s)，用于统计字符串 s 中的唯一字符（即出现次数恰好为1的字符）个数。
// 例如： s = "AABA"，唯一字符为 'A' 和 'B'（各出现1次），因此 ⁠countUniqueChars(s) = 2。
// 给定字符串 s（长度满足 1 <= s.length <= 10^5，且包含大写英文字母），计算所有子字符串 t（包括重复出现的子串）的 ⁠countUniqueChars(t) 的总和。
// 输入描述： 输入给定一个字符串，长度 ≤ 10^5，且包含大写字符
// 输出描述： 在代码中全部返回对应答案。

// 示例1：
// 	•	输入：⁠"ABC"	•	输出：⁠10
// 解释：
// 	•	所有子串："A", "B", "C", "AB", "BC", "ABC"	•	每个子串的唯一字符数量：1+1+1+2+2+3=10

function countUniqueChars(str) {
    const values = new Map()
    let res = []
    for (let i of str) {
        values.set(i, (values.get(i) || 0) + 1)
    }
    [...values.keys()].forEach(v => {
        if (values.get(v) === 1) {
            res.push(v)
        }
    })
    return res?.length || 0

}

// console.log(countUniqueChars('ABCC'));

function sumOfCountUniqueChars(s) {
    let count = 0
    let len = s.length
    if (!len) return 0

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let val = s.slice(i, j + 1)
            count += countUniqueChars(val)
        }
    }
    return count
}




console.log(sumOfCountUniqueChars('ABC'));
