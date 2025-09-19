/**
 * 数组求和
 */
const arr = [1, 2, 3, 4, 5];

function mySum(arr, index = 0) {
  if (index >= arr.length) return 0;
  const cur = arr[index];
  return cur + mySum(arr, index + 1);
}

console.log(mySum(arr));

function mySum1(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + mySum1(arr.slice(1));
}
console.log(mySum1(arr));

/**
 * 任意两个数之间的求和
 */
function mySum2(start, end) {
  if (start > end) return 0;
  if (start === end) return start;
  return start + mySum2(start + 1, end);
}
console.log(mySum2(1, 5)); // 15 (1+2+3+4+5)
console.log(mySum2(3, 7)); // 25 (3+4+5+6+7)
