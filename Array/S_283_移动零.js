function moveZeroes(nums){
    let left=0
    let right=0
    while(right<nums.length){
        if(nums[right]!==0){
            nums[left]=nums[right]
            left++
        }
        right++
    }
    for(left;left<nums.length;left++){
        nums[left]=0
    }
    return nums
}

let aa=[0,1,0,3,12]
console.log(moveZeroes(aa))