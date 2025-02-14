/**
 * 题目链接：
 * 
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
 * @param {number[]} height
 * @return {number}
 */

const arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]

/**
 * 方法一： 暴力解法
 * 时间复杂度：O(n²)
 * 空间复杂度：
 */
function func1 (nums) {
  if (nums.length < 2) return 0
  if (nums.length === 2) return nums[0] * nums[1]

  let max = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const res = (j - i) * Math.min(nums[i], nums[j])
      max = Math.max(max, res)
    }
  }
  return max
};

var res1 = func1(arr1)
console.log('res1:', res1)


/**
 * 方法一： 双指针解法
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function func2 (height) {
  if (height.length === 2) return height[0] * height[1]
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    const res = (right - left) * Math.min(height[left], height[right])
    max = Math.max(max, res)
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}

var res2 = func2(arr1)
console.log('res2:', res2)


// 复习：
function test (nums) {
  let i = 0
  let j = nums.length - 1
  let max = 0
  while (i < j) {
    const res = Math.min(nums[j], nums[i]) * (j - i)
    max = Math.max(res, max)
    if (nums[i] < nums[j]) {
      i++
    } else {
      j--
    }
  }
  return max
}

var res3 = test(arr1)
console.log('res3:', res3)
