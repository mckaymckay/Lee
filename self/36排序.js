const arr = [5, 2, 9, 1, 5, 6];

// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) return arr
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
// 归并排序
function merge(left, right) {
    let res = []
    let i = 0, j = 0
    while (i < left.length && j < right.length) {
        left[i] <= right[j] ? res.push(left[i++]) : res.push(right[j++])
    }
    return res.concat(left.slice(i)).concat(right.slice(j))
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}


// 插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}
// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}


function simpleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                // 交换
                // let temp = arr[i];
                // arr[i] = arr[j];
                // arr[j] = temp;
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    return arr;
}


console.log(quickSort(arr));
console.log(mergeSort([3, 4, 2, 7, 9, 5, 6]));
console.log(insertSort([3, 4, 2, 7, 9, 5, 6]));
console.log(bubbleSort([3, 4, 2, 7, 9, 5, 6]));
console.log(simpleSort([3, 4, 1, 2]));
