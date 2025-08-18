function compose(...fns) {
    console.log(111, ...fns)
    if (fns.length === 0) return arg => arg
    if (fns.length === 1) return fns[0]
    return fns.reduce((a, c) => {
        return (...args) => a(c(...args))
    })
}

// 示例函数
const addOne = x => x + 1;
const multiplyTwo = x => x * 2;
const subtractThree = x => x - 3;

// 组合函数
const calculate = compose(addOne, multiplyTwo, subtractThree);

// 执行顺序：subtractThree -> multiplyTwo -> addOne
console.log(calculate(10)); // 15
// 执行过程：
// 1. subtractThree(10) = 7
// 2. multiplyTwo(7) = 14
// 3. addOne(14) = 15
