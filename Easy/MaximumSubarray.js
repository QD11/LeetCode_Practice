// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

const maxSubArray = (nums) => {
    let maxSum = nums[0] //keep track of highest number
    let sum = 0 //keep track of sum through loop
    for (let i = 0; i < nums.length; i++){
        sum += nums[i] //the number is added to the sum
        
        //if the sum is lower than the number,
        //start the count at that number
        //for example [-2,1,3]
        //(-2 + 1) = -1, thus subarray starts at 1
        if(sum < nums[i]) {
            sum = nums[i]
        }
        
        //compare -2 or 1. 1 is greater so maxSum is now 1 at i=1
        //compare 4 or 1, 4 is greater so maxSum is now 4
        maxSum = Math.max(sum, maxSum)
        
    }
    return maxSum
};