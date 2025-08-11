// 实现一个 add(1)(2)(3) == 6 这样的链式调用函数


// 柯里化函数，只能调三次
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }

}
console.log(add(1)(2)(3))

function add2(value) {
    let sum = value
    function newFunc(v) {
        sum += v
        return newFunc
    }
    newFunc.valueOf = newFunc.toString = function () {
        console.log(22, sum, typeof sum)
        return sum
    }
    return newFunc
}
console.log(add2(1)(2)(3)(4) == 10)