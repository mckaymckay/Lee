
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // 找到了，返回索引
        } else if (arr[mid] < target) {
            left = mid + 1; // 在右半部分
        } else {
            right = mid - 1; // 在左半部分
        }
    }
    
    return -1; // 没找到
}


function binarySearch1(arr,target){
    let left=0
    let right=arr.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]>target){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return -1
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch1(arr,5))