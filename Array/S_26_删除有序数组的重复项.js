/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array
 * 
 * 题目：26. 删除有序数组中的重复项
 * 难度：简单
 * 标签：数组、双指针
 * 
 * 题目描述：
 * 给你一个 非严格递增排列 的数组 nums ，请你 【原地】 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 * 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
 * 返回 k 。
 * 
 * 
 * 示例 1：
 * 输入：nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出：5, nums = [0,1,2,3,4]
 * 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
 * 
 * 备注：
 * 双指针，一个循环
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

/**
 * 方法一： 双指针解法一
 * 时间复杂度：O(n)，只需要遍历一次数组
 * 空间复杂度：O(1)，原地修改数组，只需要常数空间
 */
// 定义一个函数func1，参数为nums
function func1 (nums) {
  if (nums.length <= 1) return nums.length
  let i = 0
  for (let j = 1; j < nums.length; j++) { // 注意是j < nums.length
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
      // nums[j] = null // 不能设为null，如果i===j，这一步就不对了
    }
  }
  return i + 1
};

var res1 = func1(arr1)
console.log('res1:', res1, arr1.splice(0, res1))


/**
 * 方法一： 双指针解法二 - 模板法
 * 时间复杂度：O(n)，只需要遍历一次数组
 * 空间复杂度：O(1)，原地修改数组，只需要常数空间
 */
// 定义一个函数func1，参数为nums
function func1 (nums) {
  if (nums.length <= 1) return nums.length
  // idx指向待插入位置
  let idx = 1
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[idx - 1]) {
      nums[idx] = nums[j]
      idx++
    }
  }
  return idx
}


// 复习：




// 错题本：
// 1. for循环中，j < nums.length，而不是j <= nums.length
function test (nums) {
  if (nums.length <= 1) return nums.length
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] > nums[i]) {
      nums[i + 1] = nums[j]
      i++
    }
  }
  return i + 1
}
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var res2 = test(arr)
console.log('res2:', res2, arr.splice(0, res2))

