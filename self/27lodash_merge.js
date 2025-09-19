/**
 * lodash.merge
 * 深度合并多个对象，后面的对象属性会覆盖前面的
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}


// gpt 待看
function merge(target, ...sources) {
    // 如果没有源对象，直接返回目标对象
    if (!sources.length) return target;

    const source = sources.shift();

    // 如果目标和源都是对象，进行深度合并
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                // 如果属性不存在，先创建一个空对象
                if (!target[key]) {
                    Object.assign(target, { [key]: {} });
                }
                // 递归合并
                merge(target[key], source[key]);
            } else {
                // 非对象直接赋值
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    // 继续处理其他源对象
    return merge(target, ...sources);
}

// 使用示例
const object1 = {
    a: {
        b: 1,
        c: {
            d: 2
        }
    },
    e: [1, 2, 3]
};

const object2 = {
    a: {
        b: 3,
        c: {
            f: 4
        }
    },
    e: [4, 5],
    f:1
};