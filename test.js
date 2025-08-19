function remove(arr) {
    const map = new Map()
    arr.forEach((item) => {
        map.set(item, (map.get(item) || 0) + 1)
        return map
    })
    return Array.from(map.keys())
}

console.log(remove([3, 1, 2, 5, 4, 1, 2, 3, 4, 5, 5, 3, 3]))

function remove1(arr) {
    const map = new Map()
    arr.reduce((a, c) => {
        a.set(c, (a.get(c) || 0) + 1)
        return a
    }, map)
    return Array.from(map.keys())
}

console.log(remove1([3, 1, 2, 5, 4, 1, 2, 3, 4, 5, 5, 3, 3]))

function sort1(arr) {
    const map = new Map()
    arr.reduce((a, c) => {
        a.set(c, (a.get(c) || 0) + 1)
        return a
    }, map)
    return Array.from(map.keys()).sort((a, b) => map.get(a) - map.get(b))
}

console.log(sort1([3, 1, 2, 5, 4, 1, 2, 3, 4, 5, 5, 3, 3]))