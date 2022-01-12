{/* <p>
    Write a function that takes in a non-empty array of integers that are sorted
    in ascending order and returns a new array of the same length with the squares
    of the original integers also sorted in ascending order.
</p> */}

function sortedSquaredArray(array) {
    // Write your code here.
        const zeroArray = new Array(array.length).fill(0);
        let beginP = 0
        let endP = array.length - 1
        
        for (let x = array.length - 1; x >= 0; x-- ) {
            const beginNum = array[beginP]
            const endNum = array[endP]
            
            if (Math.abs(beginNum) > Math.abs(endNum)) {
                zeroArray[x] = beginNum * beginNum
                
                beginP++
            }
            else {
                zeroArray[x] = endNum * endNum
                endP--
            }
            
        }
        
        return zeroArray;
    }

//Key Takeaway:
//Recognize that its ascending order, thus the 2 largest numbers when squared are on the edges.
//Compare the 2 and fill up the last spot on the array with the square of the larger number.
//Move the pointers inwards as you go.