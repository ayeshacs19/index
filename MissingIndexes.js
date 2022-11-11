var testArray = [11, 3, 7, 1, 20, 15, 14, 16, 12]; // unsorted array

let missingNumbers = [];    //array that stor missing number 
let missingIndexes = [];    // array that stor indexes of missing numbers



var sortedArray = testArray.sort((a, b) => a-b);  //function that sort test array 

let minNum = sortedArray[0];
let maxNum = sortedArray[sortedArray.length -1];



for (let i = minNum; i < maxNum; i++) {
    
    if (sortedArray.includes(i)){
        

    } else {
         missingIndexes.push(i-1);
         missingNumbers.push(i);
    }
}
console.log("Sorted Array");
console.log(sortedArray);
 console.log("Mssing numbers in array")
console.log(missingNumbers);
console.log("Missing indexes in Array")
console.log( missingIndexes);

