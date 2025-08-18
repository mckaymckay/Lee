function remove(arr) {
    const map = new Map()
    arr.forEach((item) => {
        map.set(item, map.get(item) || 0 + 1)
    })
    return Array.from(arr.keys())
}

console.log(remove([3, 1, 2, 5, 4, 1, 2, 3, 4, 5, 5, 3, 3]))