/**
 * 1. 寻找对象中所有age等于14的key
 * 2. 寻找name为“E”的父节点
 * 3. 扁平化这个对象
 */
const root = {
    name: 'A',
    age: 12,
    children: [
        {
            name: 'B',
            age: 13,
            children: [
                {
                    name: 'D',
                    age: 14,
                },
                {
                    name: 'E',
                    age: 15,
                },
            ],
        },
        {
            name: 'C',
            age: 16,
            children: [
                {
                    name: 'F',
                    age: 17,
                },
                {
                    name: 'G',
                    age: 18,
                    children: [
                        {
                            name: 'H',
                            age: 14,
                        },
                        {
                            name: 'I',
                            age: 15,
                        },
                    ]
                },
            ],
        },
    ],
};


// 🚗🚗🚗🌟🌟🌟
// 需要返回数组的可以想1-findKey1和3-flatObj1一样，先定义一个数组，然后forEach，然后push到数组中
// 返回单个的，先判断是否满足条件，然后递归，像2-findParent1一样

// 1. 寻找对象中所有age等于14的key
function findKey(root) {
    const queue = [root]
    const res = []
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            if (cur.age === 14) {
                res.push(cur.name)
            }
            if (cur.children) {
                queue.push(...cur.children)
            }
        }
    }
    return res
}
function findKey1(root, targetAge) {
    const res = []
    function find(root) {
        if (root.age === targetAge) {
            res.push(root.name)
        }
        if (root.children && root.children.length) {
            root.children.forEach(item => find(item))
        }
    }
    find(root)
    return res
}

console.log(76, findKey(root))
console.log(84, findKey1(root, 14))

// 2. 寻找name为“E”的父节点
function findParent(root) {
    const queue = [root]
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            if (cur.children) {
                if (cur.children.find(v => v.name === 'E')) {
                    return cur.name
                }
                queue.push(...cur.children)
            }
        }
    }
    return null
}
function findParent1(root, targetName) {
    if (!root.children || !root.children.length) {
        return
    }
    for (let i = 0; i < root.children.length; i++) {
        if (root.children[i].name === targetName) {
            return root.name
        }
        // 注意：这里res有值才能返回
        let res = findParent1(root.children[i], targetName)
        if (res) return res
    }
    return null
}

console.log(98, findParent(root))
console.log(99, findParent1(root, 'E'))

// 3. 扁平化这个对象
function flatObj(root) {
    const queue = [root]
    const res = []
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            res.push(cur)
            if (cur.children) {
                queue.push(...cur.children)
            }
        }
    }
    return res
}

function flatObj1(root) {
    const res = []
    function tranverse(obj) {
        res.push(obj.name)
        if (obj.children) {
            // 这里要给每个children都执行一遍tranverse函数，所以用了forEach
            obj.children.forEach(v => tranverse(v))
        }
    }
    tranverse(root)
    return res
}

console.log(111, flatObj(root))
console.log(121, flatObj1(root))