/**
 * 给你一个整数数组 nums 和两个整数 indexDiff 和 valueDiff 。

  找出满足下述条件的下标对 (i, j)：

  i != j,
  abs(i - j) <= indexDiff
  abs(nums[i] - nums[j]) <= valueDiff
  如果存在，返回 true ；否则，返回 false 。
 */

let nums = [1, 2, 3, 1], indexDiff = 3, valueDiff = 0

function func1 (nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= i + indexDiff; j++) {
      if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
        return true
      }
    }
  }
  return false
}

const res = func1(nums, indexDiff, valueDiff)
console.log('res:', res)