
/**
 * 
 * call
 */
function mycall(context, ...args) {
    if (context === null || context === undefined) {
        context = globalThis
    }
    const fn = Symbol() // 1. 创建唯一属性名
    context[fn] = this // 2. 将[函数]设为目标对象的属性（避免this丢失）
    const res = context[fn](...args) // 3. 执行该函数，传递参数
    delete context[fn] // 4. 删除该属性，返回结果
    return res
}

Function.prototype.mycall = mycall

// 🌟🌟🌟🚗🚗🚗
// 箭头函数的this取决于它定义时的外部作用域，不能被call/apply/bind等改变
// 这里this.name其实是undefind
const greet1 = (age, city) => {
    console.log(`Hello, my name is ${this.name},I am ${this.age},I am from ${this.city}`)
}

function greet(age, city) {
    console.log(`Hello, my name is ${this.name},I am ${age},I am from ${city}`)
}
let person = { name: 'mm' }
greet.mycall(person, 20, 'call')


/**
 * apply
 */
// 🌟🌟🌟🚗🚗🚗

function myApply(context, args) {
    if (context === null || context === undefined) {
        context = globalThis
    }
    if (args !== null && !Array.isArray(args)) {
        throw new Error('args must be null or array')
    }
    const fn = Symbol()
    context[fn] = this
    const result = context[fn](...(args || []))
    delete context[fn]
    return result
}
Function.prototype.myApply = myApply
greet.myApply(person, [30, 'apply'])
