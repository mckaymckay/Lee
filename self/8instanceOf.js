function myInstanceof(obj, constructor) {
    if (typeof obj !== 'object' || obj === null) {
        return false
    }

    let proto = Object.getPrototypeOf(obj)
    let constructorProto = constructor.prototype
    while (true) {
        if (proto === null || proto === undefined) return false
        if (proto === constructorProto) return true
        // 也就是沿着原型链向上找
        proto = Object.getPrototypeOf(proto)
    }
}

class Animal { }

class Dog extends Animal { }
const dog = new Dog()
console.log(myInstanceof(dog, Dog)) // true