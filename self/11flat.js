


// 普通的flat方法
function deepFlat(arr) {
    const res = arr.reduce((acc, cur) => {
        const val = Array.isArray(cur) ? deepFlat(cur) : cur
        return acc.concat(val)
    }, [])

    return res
}

function deepFlat1(arr) {
    return arr.reduce((a, c) => {
        const temp = Array.isArray(c) ? deepFlat1(c) : c
        return a.concat(temp)
    }, [])
}

console.log(21, deepFlat([1, 2, [3, [4, [5, 6], [7, 8]]]]))
console.log(22, deepFlat1([[1, 2], [3, 4]]))
console.log(23, deepFlat1([1, 2, [3, [4, [5, 6], [7, 8]]]]))
// [1, 2, 3, 4, 5, 6,7,8])


// 支持指定深度

function deepflatPro(arr, depth) {
    if (depth <= 0) return arr.slice()
    return arr.reduce((a, c) => {
        const temp = Array.isArray(c) ? deepflatPro(c, depth - 1) : c
        return a.concat(temp)
    }, [])
}

console.log(50, deepflatPro([1, 2, [3, [4, [5, 6], [7, 8]]]], 1))
console.log(50, deepflatPro([1, 2, [3, [4, [5, 6], [7, 8]]]], 2))
console.log(50, deepflatPro([1, 2, [3, [4, [5, 6], [7, 8]]]], 3))
// [1, 2, 3, 4, 5, 6])
