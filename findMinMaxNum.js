//Find the smallest or minimum number in an array

 function minNumInArr(arr){
    let min = arr[0];

    for(let i=1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;
 }
let array = [3,4,1,23,43,5,8];
const result = minNumInArr(array)
console.log(result)


//Find the maximum or largest number in an array

function maxNumInArr(arr){
    let max = arr[0];

    for(let i=0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let array1 = [3,4,1,23,43,5,8];
const result1 = maxNumInArr(array1);
console.log(result1);