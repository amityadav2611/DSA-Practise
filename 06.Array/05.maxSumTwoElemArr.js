//Find the maximum sum of any two elements in an array
//                      OR
//Finding the largest and second largest element in array
/**
 * let array = [12,4,67,2,34]
 * step.1:- Maintain two variable : largest =- Infinity and secondLargest =- Infinity
 * step.2:- loop over the arr and if you find a number that is greater than "largest" then update
 *  "secondLargest = largest : largest = arr[i];"
 * step.3:- Else check if arr[i] is greater than secondLargest.........if yes then update the secondLargest 
 */

function largestTwoNumberSum(){
    const arr = [4,7,5,3,6,1,2,3,9];
    let firstMax = arr[0];
    let secondMax = -Infinity;
    for(let i=0; i < arr.length; i++){
        if(arr[i] >= firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }else if(arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    console.log(firstMax+secondMax);
}
largestTwoNumberSum();