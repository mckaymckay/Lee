let arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 6, 6]


// 1️⃣
let obj = arr.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur]++
    } else {
        acc[cur] = 1
    }
    return acc
}, {})
console.log([...new Set(arr)].sort((a, b) => obj[b] - obj[a]))


// 2️⃣
let obj1 = {}
arr.forEach(v => obj1[v] = (obj1[v] || 0) + 1)
console.log([...new Set(arr)].sort((a, b) => obj1[b] - obj1[a]))

// 
function sortData(arr) {
    const map = {}
    for (let item of arr) {
        map[item] = (map[item] || 0) + 1
    }
    arr.sort((a, b) => map[a] - map[b])
    // return Object.keys(map).sort((a, b) => map[a] - map[b]).map(Number)
    return [...new Set(arr.sort((a, b) => map[a] - map[b]))]
}
console.log(30, sortData([10, 10, 2, 3, 4, 2, 1, 3, 4, 4, 3, 2, 2]))