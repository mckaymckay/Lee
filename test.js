

// 1. 数组去重
function remove(arr) {
    const map = new Map()
    // arr.forEach(item => {
    //     map.set(item, (map.get(item) || 0) + 1)
    // })
    arr.reduce((a, c) => {
        a.set(c, (a.get(c) || 0) + 1)
        return a
    }, map)
    return [...map.keys()]
}

const removeArr = [12, 3, 12, 22, 22, 11, 11, 2, 1, 2, 3, 12]
// console.log(10, remove(removeArr))


// 7. new
function myNew(...args) {
    const constructor = args.shift()
    const obj = Object.create(constructor.prototype)
    const result = constructor.apply(obj, args)
    return result instanceof Object ? result : obj
}

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayHi = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age}.`)
}
const student = myNew(Person, 'mm', 29)
const student1 = new Person('bb', 30)
// console.log('mynew', student)
// console.log('new', student1)
// student.sayHi()
// student1.sayHi()


function hello(...args) {
    // console.log(111, args)
}
hello({ value: 1, age: 3 })

// 19. 树转数组 数组转树
const root = {
    name: 'A',
    age: 12,
    parentNode: null,
    children: [
        {
            name: 'B',
            age: 13,
            parentNode: 'A',
            children: [
                {
                    name: 'D',
                    age: 14,
                    parentNode: 'B',
                },
                {
                    name: 'E',
                    age: 15,
                    parentNode: 'B',
                },
            ],
        },
        {
            name: 'C',
            age: 16,
            parentNode: 'A',
            children: [
                {
                    name: 'F',
                    age: 17,
                    parentNode: 'C',
                },
                {
                    name: 'G',
                    age: 18,
                    parentNode: 'C',
                    children: [
                        {
                            name: 'H',
                            age: 14,
                            parentNode: 'G',
                        },
                        {
                            name: 'I',
                            age: 15,
                            parentNode: 'G',
                        },
                    ]
                },
            ],
        },
    ],
};

const arr = [
    { name: 'A', age: 12, parentNode: null },
    { name: 'B', age: 13, parentNode: 'A' },
    { name: 'D', age: 14, parentNode: 'B' },
    { name: 'E', age: 15, parentNode: 'B' },
    { name: 'C', age: 16, parentNode: 'A' },
    { name: 'F', age: 17, parentNode: 'C' },
    { name: 'G', age: 18, parentNode: 'C' },
    { name: 'H', age: 14, parentNode: 'G' },
    { name: 'I', age: 15, parentNode: 'G' }
]
// 树-》数组，层序遍历
function tranverse(root) {
    const res = []
    const queue = [root]
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            res.push({
                name: cur.name,
                age: cur.age,
                parentNode: cur.parentNode
            })
            if (cur.children && cur.children.length > 0) {
                queue.push(...cur.children)
            }
        }
    }
    return res
}

// 树-》数组，递归遍历
function tranverse1(root) {
    const res = []
    function dfs(root) {
        res.push({
            name: root.name,
            age: root.age,
            parentNode: root.parentNode
        })
        if (root.children && root.children.length) {
            root.children.forEach(item => dfs(item))
        }
    }
    dfs(root)
    return res
}
// console.log(129, tranverse(root))
// console.log(130, tranverse1(root))


// 数组-》树
function toTree(arr) {
    const map = {}
    const res = []
    arr.forEach(item => {
        map[item.name] = item
    })
    arr.forEach(item => {
        const parent = map[item.parentNode]
        if (parent) {
            parent.children ? parent.children.push(item) : parent.children = [item]
        } else {
            res.push(item)
        }
    })
    return res
}
console.log(161, toTree(arr))

// 20. 链式调用
function calculator() {
    let num = 0
    const api = {
        add(val) {
            num += val
            return api
        },
        minus(val) {
            num -= val
            return api
        },
        multiply(val) {
            num *= val
            return api
        },
        divide(val) {
            num /= val
            return api
        },
        getResult() {
            return num
        }
    }
    return api
}

function Calculator1() {
    this.num = 0
    this.add = function (val) {
        this.num += val
        return this
    }
    this.minus = function (val) {
        this.num -= val
        return this
    }
    this.multiply = function (val) {
        this.num *= val
        return this
    }
    this.divide = function (val) {
        this.num /= val
        return this
    }
    this.getResult = function () {
        return this.num
    }
}



class Calculator2 {
    // constructor：构造器函数，写初始化逻辑
    constructor(num = 0) {
        this.num = num
    }
    add(val) {
        this.num += val
        return this
    }
    minus(val) {
        this.num -= val
        return this
    }
    multiply(val) {
        this.num *= val
        return this
    }
    divide(val) {
        this.num /= val
        return this
    }
    getResult() {
        return this.num
    }
}
console.log(249, calculator().add(10).minus(2).multiply(5).divide(2).getResult())
const cal = new Calculator1()
console.log(251, cal.add(10).minus(2).multiply(5).divide(2).getResult())
const cal2 = new Calculator2()
console.log(253, cal2.add(10).minus(2).multiply(5).divide(2).getResult())