// 方法1: 使用原生Intl.NumberFormat（推荐）
function formatWithIntl(num) {
    return new Intl.NumberFormat().format(num);
}

// 方法2: 使用正则表达式
function formatWithRegExp(num) {
    // 处理负数
    const isNegative = num < 0;
    const str = Math.abs(num).toString();

    // 分离整数和小数部分
    const parts = str.split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1] || '';

    // 正则匹配并插入逗号
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // 组合结果（包含可能的负数符号和小数部分）
    return `${isNegative ? '-' : ''}${integerPart}${decimalPart ? '.' + decimalPart : ''}`;
}

// 方法3: 循环处理（适合理解原理）
function formatWithLoop(num) {
    const isNegative = num < 0;
    const str = Math.abs(num).toString().split('.');
    let integerPart = str[0];
    const decimalPart = str[1] || '';
    const result = [];

    // 从后往前每隔三位添加逗号
    for (let i = integerPart.length; i > 0; i -= 3) {
        const start = Math.max(0, i - 3);
        result.unshift(integerPart.slice(start, i));
    }

    // 组合结果
    const formattedInteger = result.join(',');
    return `${isNegative ? '-' : ''}${formattedInteger}${decimalPart ? '.' + decimalPart : ''}`;
}

// 测试
console.log(formatWithIntl(1234567)); // "1,234,567"
console.log(formatWithIntl(1234567.89)); // "1,234,567.89"
console.log(formatWithIntl(-12345)); // "-12,345"

console.log(formatWithRegExp(1234567)); // "1,234,567"
console.log(formatWithRegExp(1234567.89)); // "1,234,567.89"
console.log(formatWithRegExp(-12345)); // "-12,345"

console.log(formatWithLoop(1234567)); // "1,234,567"
console.log(formatWithLoop(1234567.89)); // "1,234,567.89"
console.log(formatWithLoop(-12345)); // "-12,345"
