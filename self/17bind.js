function myBind(context, ...args) {
    // if (context === null || context === undefined) {
    //     context = globalThis
    // }
    // 可以写成
    context = context || globalThis

    // 原函数的引用
    const originalFunc = this
    const boundFn = function (...newArgs) {
        // 如果作为构造函数调用（new），this instanceof boundFn为true
        if (this instanceof boundFn) {
            // 直接调用原函数作为构造函数
            return new originalFunc(...args, ...newArgs)
        }
        // 普通函数调用
        return originalFunc.apply(context, [...args, ...newArgs])
    }

    // 保持原型链
    boundFn.prototype = Object.create(originalFunc.prototype)
    return boundFn
}



function greet(age, city) {
    console.log(`Hello, my name is ${this.name}, age ${age}, from ${city}`)
}
const person = { name: 'Tom' };

Function.prototype.myBind = myBind


// 1. 普通调用
greet.myBind(person, 20, 'mybind')()
greet.myBind(person, 30)('mybind1')

// 2. 作为构造函数使用
function Student(name, age) {
    this.name = name;
    this.age = age
}
const BoundStudent = Student.myBind(null, 'aa')
// BoundStudent: ƒ Student(name) {
//     this.name = name;
//     this.age = age
// }

const student = new BoundStudent(22)
console.log(49, student instanceof Student) // true
// student: { name: 'aa', age: 22 }
// console.log(globalThis)