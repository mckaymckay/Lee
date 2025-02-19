/**
 * 题目链接：
 * https://leetcode.cn/problems/merge-intervals/description/?envType=problem-list-v2&envId=array
 * 
 * 题目：
 * 难度：
 * 标签：
 * 
 * 题目描述：
 * 
 * 
 * 示例 1：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 备注：
 * 
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const arr1 = [[1, 3], [2, 6], [8, 10], [15, 18]]

/**
 * 方法一： 
 * 时间复杂度：
 * 空间复杂度：
 */
function func1 (intervals) {
  if (intervals.length < 2) return intervals
};

var res1 = func1(arr1, target1)
console.log('res1:', res1)


// 复习：
function test () {

}