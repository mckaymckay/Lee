/**
 * https://leetcode.cn/problems/two-sum/description/?envType=problem-list-v2&envId=array
 */

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const arr1 = [3, 2, 8, 11, 15, 7]
const target1 = 9

/**
 * 方法一： 暴力解法
 * 时间复杂度：O(n^2)，需要两层循环
 * 空间复杂度：O(1)，只需要常数空间
 */
function func1 (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
};

var twoSum = func1(arr1, target1)
console.log('res1:', twoSum)

function func2 (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map[complement], i]
    }
    map.set(nums[i], i)
  }
}
