// 实现一个链式调用的计算器，例如：calculator.add(1).minus(2).multiply(3).getResult()


// 类实现 
// 🌟🌟🌟 constructor 返回对象时，new 的结果会是这个对象
class Calculator {
    // constructor：构造器函数，写初始化逻辑
    constructor(value = 0) {
        this.value = value
    }
    add(val) {
        this.value += val
        return this
    }
    minus(val) {
        this.value -= val
        return this
    }
    multiply(val) {
        this.value *= val
        return this
    }
    divide(val) {
        this.value /= val
        return this
    }
    getResult() {
        return this.value
    }
}

// 闭包实现
function calculator1() {
    let value = 0

    const api = {
        // 两种写法，这是一个对象，要加逗号
        add: function (num) {
            value += num
            return api
        },
        // add(num) {
        //     value += num
        //     return api
        // },
        minus(num) {
            value -= num;
            return api;
        },
        multiply(num) {
            value *= num;
            return api;
        },
        divide(num) {
            value /= num;
            return api;
        },
        getResult() {
            return value;
        }
    }
    return api
}

const calculator = new Calculator()
const res = calculator.add(1).minus(2).multiply(3).getResult()
console.log(22, res)

const res1 = calculator1().add(1).minus(2).multiply(3).getResult()
console.log(62, res1)