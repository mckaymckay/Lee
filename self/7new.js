
// 注意函数参数使用...args
function myNew(...args) {
    const constructor = args.shift()
    const obj = Object.create(contructor.prototype)
    const res = constructor.apply(obj, args)
    return res instanceof Object ? res : obj
}

// constructor返回对象时，new的结果就是这个对象