/**
 * 数组去重
 * arrayRepeatRemove:使用map，不能保持数组顺序
 * arrayRepeatRemove1:使用Map
 * arrayRepeatRemove2:创建新数组
 */



let aa = [10, 1, 2, 3, 3, 3, 4, 5, 5]
// 不能保证数组顺序
function arrayRepeatRemove(arr) {
    const map = {}
    arr.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1
        return a
    }, map)
    return Object.keys(map).map(Number)
}

console.log(14, arrayRepeatRemove(aa))


// 保持数组顺序
function arrayRepeatRemove1(arr) {
    const map = new Map()
    arr.reduce((a, c) => {
        a.set(c, (a.get(c) || 0) + 1)
        return a
    }, map)
    return [...map.keys()]
}
function removeData(arr) {
    const map = new Map()
    for (let item of arr) {
        map.set(item, (map.get(item) || 0) + 1)
    }
    return [...map.keys()]
}

console.log(26, arrayRepeatRemove1(aa))

function arrayRepeatRemove2(arr) {
    const res = []
    arr.forEach(a => {
        if (!res.includes(a)) {
            res.push(a)
        }
    })
    return res
}

console.log(38, arrayRepeatRemove2(aa))
