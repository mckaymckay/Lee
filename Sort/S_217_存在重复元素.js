/**
 * 题目链接：
 * 
 * 
 * 题目：
 * 难度：
 * 标签：
 * 
 * 题目描述：
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 * 
 * 
 * 示例 1：
 * 
 * 备注：
 * 
 */


const arr1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const arr2 = [1, 2, 3, 1]
const target1 = 9

/**
 * 方法一：set
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function func1 (nums) {
  // const set = [...new Set(nums)]
  // return set.length !== nums.length
  return new Set(nums).size !== nums.length
};

function func2 (nums) {
  const map = new Map()
  nums.forEach(v => {
    if (map.has(v)) {
      map.set(v, map.get(v) + 1)
    } else {
      map.set(v, 1)
    }
  })
  return map.size !== nums.length
}

var res1 = func1(arr1)
console.log('res1:', res1)

var res2 = func2(arr1)
console.log('res2:', res2)


// 复习：
function test () {

}