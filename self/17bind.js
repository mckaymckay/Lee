function myBind(context, ...args) {
    if (context === null || context === undefined) {
        context = globalThis
    }

    const self = this // 原函数的引用
    function boundFn(...newArgs) {
        // 如果作为构造函数调用（new），this instanceof boundFn为true
        if (this instanceof self) {
            return boundFn(...args, ...newArgs)
        }
        // 普通函数调用
        return self.apply(context, [...args, ...newArgs])
    }
    // 保持原型链
    boundFn.prototype = Object.create(self.prototype)
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

const student = new Student(22)
// student: { name: 'aa', age: 20 }
console.log(globalThis)