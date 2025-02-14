/**
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/
 * 
 * 题目：80. 删除有序数组中的重复项II
 * 难度：
 * 标签：
 * 
 * 题目描述：
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1：
 * 输入：nums = [1,1,1,2,2,3]
 * 输出：5, nums = [1,1,2,2,3]
 * 解释：函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3。 不需要考虑数组中超出新长度后面的元素。
 * 
 * 备注：
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

const arr1 = [1, 1, 1, 2, 2, 3]

// 通用解法：
// 为了让解法更具有一般性，我们将原问题的「最多保留 1 位」修改为「最多保留 k 位」。

// 对于此类问题，我们应该进行如下考虑：

// 由于是保留 k 个相同数字，对于前 k 个数字，我们可以直接保留。
// 对于后面的任意数字，能够保留的前提是：与当前写入的位置前面的第 k 个元素进行比较，不相同则保留。
// 举个🌰，我们令 k=1，假设有样例：[3,3,3,3,4,4,4,5,5,5]

// 设定变量 idx，指向待插入位置。idx 初始值为 0，目标数组为 []

// 首先我们先让第 1 位直接保留（性质 1）。idx 变为 1，目标数组为 [3]

// 继续往后遍历，能够保留的前提是与 idx 的前面 1 位元素不同（性质 2），因此我们会跳过剩余的 3，将第一个 4 追加进去。idx 变为 2，目标数组为 [3,4]

// 继续这个过程，跳过剩余的 4，将第一个 5 追加进去。idx 变为 3，目标数组为 [3,4,5]

// 当整个数组被扫描完，最终我们得到了目标数组 [3,4,5] 和 答案 idx 为 3。


// 实现为：
function removeDuplicates (nums, k = 2) {
  if (nums.length <= k) return nums.length;

  // idx 指向待插入位置
  let idx = k;

  for (let j = k; j < nums.length; i++) {
    if (nums[j] !== nums[idx - k]) {
      nums[idx] = nums[j];
      idx++;
    }
  }

  return idx;
}
/**
 * 方法一： 
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function func1 (nums) {
  if (nums.length <= 2) return nums.length
  let i = 2
  for (let j = 2; j < nums.length; j++) {
    if (nums[j] !== nums[i - 2]) {
      num[i] = nums[j]
      i++
    }
  }
  return i
};

var res1 = func1(arr1)
console.log('res1:', res1)


// 复习：
function test () {

}