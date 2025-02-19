/**
 * 题目链接：
 * https://leetcode.cn/problems/majority-element/description/?envType=problem-list-v2&envId=sorting
 * 
 * 题目：
 * 难度：
 * 标签：
 * 
 * 题目描述：
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 示例 1：
 * 
 * 备注：
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

const arr1 = [2, 2, 1, 1, 1, 2, 2]
/**
 * 方法一：哈希表 
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function func1 (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1)
    }
    else {
      map.set(nums[i], 1)
    }
  }
  let num = nums[0]
  let res = map.get(nums[0])
  for (const [key, value] of map) {
    if (value > res) {
      res = value
      num = key
    }
  }
  return num
};

var res1 = func1(arr1)
console.log('res1:', res1)

/**
 * 方法二：排序
 * 时间复杂度：O(nlogn)
 * 空间复杂度：O(logn)
 */

function func2 (nums) {
  nums.sort((a, b) => a - b)
  return nums[Math.floor(nums.length / 2)]
}


// 复习：
function test () {

}

