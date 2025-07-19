var merge = function(nums1, m, nums2, n) {
    let i=m-1
    let j=n-1
    let cur=m+n-1
    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[cur]=nums1[i]
            i--
        }else{
            nums1[cur]=nums2[j]
            j--
        }
        cur--
    }
    // 可以省略这句代码
    // if(j<0) return nums1
    while(j>=0){
        nums1[j]=nums2[j]
        j--
    }
    return nums1
};

let nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3
merge(nums1,m,nums2,n)
console.log(22,nums1)