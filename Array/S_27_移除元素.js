/**
 * https://leetcode.cn/problems/remove-element/description/?envType=problem-list-v2&envId=array
 * 
 * 题目：27. 移除元素
 * 难度：
 * 标签：
 * 
 * 题目描述：
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。
 * 假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：
 * 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
 * 返回 k。
 * 
 * 
 * 示例 1：
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2,_,_]
 * 备注：
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const nums = [3, 2, 2, 3]
const val = 2

/**
 * 方法一： 双指针
 * 时间复杂度：O(n)，只需要遍历一次数组
 * 空间复杂度：O(1)，原地修改，不需要额外空间
 */
function func1 (nums, target) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== target) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
};


/**
 * 方法一： 双指针优化
 * 时间复杂度：O(n)，只需要遍历一次数组
 * 空间复杂度：O(1)，原地修改，不需要额外空间
 */
function func2 (nums, target) {
  const len = nums.length
  let i = 0
  let j = len - 1
  while (i <= j) {
    if (nums[i] === target) {
      nums[i] = nums[j]
      j--
    }
    else {
      i++
    }
  }
  return i
}

var twoSum1 = func2(nums, val)
console.log('res1:', twoSum1)


// 复习：
function test (arr, target) {
}

const arr = [3, 2, 2, 3]
const target = 2
var res2 = test(arr, target)
console.log('res2:', res2)