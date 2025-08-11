var sortedSquares = function(nums) {
    let res=[]
    let i=0
    let j=nums.length-1
    while(i<=j){
        console.log(6,Math.abs(nums[i]),Math.abs(nums[j]))
        if(Math.abs(nums[i])>=Math.abs(nums[j])){
            res.unshift(nums[i]*nums[i])
            i++
        }else{
            res.unshift(nums[j]*nums[j])
            j--
        }
    }
    return res
};


let nums = [-4,-1,0,3,10]

console.log(sortedSquares(nums))