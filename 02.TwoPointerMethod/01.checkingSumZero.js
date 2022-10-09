//Find the first pair that sums to zero
/**
 * arr = [-5,-4,-3,-2,0,2,4,6,8]  --> input
 * [-4,4]  ---> ouput
 * 
 * time complexity --> O(n) --> linear time complexity
 */

let arr = [-5,-4,-3,3,0,3,4,6,8]

function getSumPairZero(array){

    let left = 0;
    let right = array.length-1

    while(left < right){

        let sum = array[left] + array[right];
        
        if(sum === 0){
            return [array[left], array[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

let result = getSumPairZero(arr)
console.log(result)






//some more question related to this

//Problem 1:- Find the pairs that sums to 6

function getSumPairToSix(array){

    let left = 0;
    let right = array.length-1;

    while(left < right){

        let sum = array[left] + array[right];

        if(sum === 6){
            return [array[left], array[right]]
        }else if(sum > 6){
            right--;
        }else{
            left++;
        }
    }
}

let result1 = getSumPairToSix(arr)
console.log("amit--",result1)


//Problem 2:- Find the pairs that sums to x

function getSumPairToX(array,x){

    let left = 0;
    let right = array.length-1;

    while(left < right){
        let sum = array[left] + array[right]
        if(sum === x){
            return [array[left], array[right]]
        }else if(sum > x){
            right--;
        }else{
            left++;
        }
    }
}
let result2 = getSumPairToX(arr, 3)
console.log(result2)


//Problem 3:- Find the pairs that sums to closest to 12