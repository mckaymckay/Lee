/**
 * https://leetcode.cn/problems/remove-element/description/?envType=problem-list-v2&envId=array
 * 
 * 题目：移除元素
 * 难度：
 * 标签：
 * 
 * 题目描述：
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
