// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoNumberSum(array, targetSum) {
    // Write your code here.
        const numHolder = {}
        for (let i = 0; i < array.length; i++) {
            const difference = targetSum - array[i]
            if (numHolder[difference] == true) {
                return [array[i], difference]
            } else {
                numHolder[array[i]] = true
            }
        }
        return []
}

//KEY TAKEAWAYS
//Store the value that failed to pass in a hash
//Everytime you iterate through the array, check if the difference exists in the hash