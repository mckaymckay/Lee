/**
 * 深拷贝
 */

// 不支持循环引用
function deepClone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    const newObj = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}

// 支持循环引用
function deepClone1(obj, hash = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    if (hash.has(obj)) {
        return hash.get(obj)
    }

    let newObj = Array.isArray(obj) ? [] : {}
    hash.set(obj, newObj)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone1(obj[key], hash)
        }
    }
    return newObj
}

function deepClonePro(obj, hash = new WeakMap()) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }

    // 如果对象已经存在于hash表中，直接返回引用，避免循环引用问题
    if (hash.has(obj)) {
        return hash.get(obj)
    }

    let newObj
    if (Array.isArray(obj)) {
        newObj = []
    } else if (typeof obj == 'function') {
        // 对于函数，直接返回引用（浅拷贝）
        newObj = obj
    } else if (obj instanceof Date) {
        newObj = new Date(obj.getTime())
    } else if (obj instanceof RegExp) {

    } else {
        newObj = {}
    }

    hash.set(obj, newObj)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClonePro(obj[key], hash)
        }
    }
    return newObj
}





const a = { name: 'Tom', info: { age: 18 } };
a.self = a; // 循环引用

const b = deepClone1(a);
console.log(b); // 深拷贝后的对象
console.log(b.info === a.info); // false
console.log(b.self === b); // true

