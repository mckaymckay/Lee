/**
 * https://leetcode.cn/problems/two-sum/description/?envType=problem-list-v2&envId=array
 * 
 * 题目：
 * 难度：
 * 标签：
 * 
 * 题目描述：
 * 
 * 
 * 示例 1：
 * 
 * 备注：
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const arr1 = [3, 2, 8, 11, 15, 7]
const target1 = 9

/**
 * 方法一： 
 * 时间复杂度：
 * 空间复杂度：
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

var res1 = func1(arr1, target1)
console.log('res1:', res1)
