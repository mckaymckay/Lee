/**
 * 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，
 * arr2 中的每个元素都出现在 arr1 中。

   对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。
   未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 */

// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
// let arr2 = [2, 1, 4, 3, 9, 6]

let arr1 = [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31]
let arr2 = [2, 42, 38, 0, 43, 21]

// 时间复杂度：O(n + m + k log k)
// 空间复杂度: O(n + m + k)-->O(n)
function func1 (arr1, arr2) {
  let map = new Map()
  let arr = []
  // O(n)
  for (let num of arr1) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  // O(m)
  for (let j of arr2) {
    // arr = arr.concat(Array(map.get(j)).fill(j))
    arr.push(...Array(map.get(j)).fill(j))
    map.delete(j)
  }
  // O(k·logk)
  let ar = []
  for (let [key, value] of map) {
    ar.push(...Array(value).fill(key))
  }
  return [...arr, ...ar.sort((a, b) => a - b)]
}


/**
 * arr2表明了顺序 
 */
function func2 (arr1, arr2) {
  const map = new Map()
  for (let i in arr2) {
    map.set(arr2[i], i)
  }

  arr1.sort((a, b) => {
    const hasA = map.get(a)
    const hasB = map.get(b)
    if (!hasA && hasB) {
      return 1
    } else if (hasA && !hasB) {
      return -1
    } else if (!hasA && !hasB) {
      return a - b
    } else {
      return hasA - hasB
    }
  })
  return arr1
}

const res = func2(arr1, arr2)
console.log('res:', res)
