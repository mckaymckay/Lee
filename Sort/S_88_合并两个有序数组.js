/**
 * 题目链接：
 * https://leetcode.cn/problems/merge-sorted-array/description/?envType=problem-list-v2&envId=sorting
 * 
 * 题目：
 * 难度：
 * 标签：
 * 
 * 题目描述：
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
 * 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
 * 
 * 示例 1：
 * 
 * 备注：
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3

/**
 * 方法一：双指针
 * 时间复杂度：while循环：O(m+n)，for循环：O(m+n)，总时间复杂度：O(m+n)
 * 空间复杂度：O(m+n)
 */
function func1 (nums1, m, nums2, n) {
  let i = 0, j = 0
  const sorted = new Array(m + n).fill(0)
  while (i < m || j < n) {
    if (i === m) {
      sorted[i + j] = nums2[j]
      j++
    } else if (j === n) {
      sorted[i + j] = nums1[i]
      i++
    } else if (nums1[i] < nums2[j]) {
      sorted[i + j] = nums1[i]
      i++
    } else {
      sorted[i + j] = nums2[j]
      j++
    }
  }

  for (let l = 0; l < m + n; l++) {
    nums1[l] = sorted[l]
  }
};

var res1 = func1(nums1, m, nums2, n)
// console.log('res1:', nums1)


/**
 * 方法二：逆向双指针
 * 时间复杂度：while循环：O(m+n)
 * 空间复杂度：O(1)
 */
const nums11 = [1, 2, 3, 0, 0, 0]
const m1 = 3
const nums21 = [2, 5, 6]
const n1 = 3
function func2 (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1
  let cur
  let tail = m + n - 1
  while (i >= 0 || j >= 0) {
    if (i === -1) {
      cur = nums2[j]
      // nums1[i + j + 1] = nums2[j]
      j--
    } else if (j === -1) {
      cur = nums1[i]
      // nums1[i + j + 1] = nums1[i]
      i--
    } else if (nums1[i] > nums2[j]) {
      cur = nums1[i]
      // nums1[i + j + 1] = nums1[i]
      i--
    }
    else {
      cur = nums2[j]
      // nums1[i + j + 1] = nums2[j]
      j--
    }
    nums1[tail--] = cur
  }
}
var res2 = func2(nums11, m1, nums21, n1)
console.log('res2:', nums11)

const nums111 = [1, 2, 3, 0, 0, 0]
const m11 = 3
const nums211 = [2, 5, 6]
const n11 = 3

// 复习：

function test (nums1, m, nums2, n) {
  let i = 0, j = 0
  let arr = []
  while (i < m || j < n) {
    if (i === m) {
      arr.push(nums2[j])
      j++
    } else if (j === n) {
      arr[i + j] = nums2[i]
      i++
    } else if (nums1[i] < nums2[j]) {
      arr.push(nums1[i])
      i++
    } else {
      arr.push(nums2[j])
      j++
    }
  }
  for (let k = 0; k < arr.length; k++) {
    nums1[k] = arr[k]
  }
}
var res3 = test(nums111, m11, nums211, n11)
console.log('res3:', nums111)

function test1 (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1
  let tail = m + n - 1
  while (i >= 0 || j >= 0) {
    if (i === -1) {
      nums1[tail] = nums2[j]
      j--
    } else if (j === -1) {
      nums1[tail] = nums1[i]
      i--
    } else if (nums1[i] > nums2[j]) {
      nums1[tail] = nums1[i]
      i--
    } else {
      nums1[tail] = nums2[j]
      j--
    }
    tail--
  }

}
const nums1111 = [1, 2, 3, 0, 0, 0]
const m111 = 3
const nums2111 = [2, 5, 6]
const n111 = 3
var res4 = test1(nums1111, m111, nums2111, n111)
console.log('res4:', nums1111)