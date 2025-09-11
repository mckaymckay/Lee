/**
 * lodash.get
 * 用于安全的获取嵌套对象的属性值，避免因为中间属性不存在而报错
 */

function myGet(obj, path, defaultValue) {
    const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
    let result = obj
    for (const key of paths) {
        if (result == null) {
            return defaultValue
        }
        result = result[key]
    }
    return result === undefined ? defaultValue : result
}

// 使用示例
const obj = {
    a: {
        b: {
            c: 1,
            d: [1, 2, 3]
        }
    }
};

console.log(myGet(obj, 'a.b.c')); // 1
console.log(myGet(obj, 'a.b.d[1]')); // 2
console.log(myGet(obj, 'a.b.e', 'default')); // 'default'
