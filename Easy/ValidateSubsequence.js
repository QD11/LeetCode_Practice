
//   Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one.

//   A subsequence of an array is a set of numbers that aren't necessarily adjacent
//   in the array but that are in the same order as they appear in the array. For
//   instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
//   <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
//   that a single number in an array and the array itself are both valid
//   subsequences of the array.


function isValidSubsequence(array, sequence) {
    // Write your code here.
        let arrayPos = 0
        let sequePos = 0
        while (arrayPos < array.length && sequePos < sequence.length) {
            if (array[arrayPos] === sequence[sequePos]) {
                sequePos++
            }
            arrayPos++
        }
        return sequePos === sequence.length
}

// KEY TAKEWAY

//Keep track of the index position as you iterate through the array
//Increase the sequence index by one everytime it matches
//Increase the arrayPos by one as you iterate through it
//If the sequeIndex matches the length of sequence, then it means it has successfully 
//found the subsequent numbers in the array