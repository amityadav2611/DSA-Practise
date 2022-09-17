//write a javascript program to cyclically rotate an array(rotate (arr,d)) that arr by d elements.
/**
 * Example:-
 *         let arr = [12,3,6,2,9,11]
 *         rotate(arr,2) --> [9,11,12,3,6,2]
 *         rotate(arr,1) --> [11,12,3,6,2,9]
 *         rotate(arr,4) --> [6,2,9,11,12,3]
 * 
 * logic:-
 *        arr = reverse(arr)
 *        arr[1st two element] = reverse(arr[1st two elements])
 *        arr[remaining elements] = reverse(arr[remaining elements])
 */

// function reverse(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         arr[i] = arr[i] + arr[j]
//         arr[j] = arr[i] - arr[j]
//         arr[i] = arr[i] - arr[j]
//         i++;
//         j--;
//     }
//     return arr;
// }

function rotateArray(arr, k){
    let temp = new Array(arr.length).fill(0)
    for(let i=0; i < arr.length; i++){
        let shiftIndex = (i+k) % arr.length;
        temp[shiftIndex] = arr[i]
    }
    for(let i=0; i < arr.length; i++){
        arr[i] = temp[i]
    }
    return temp;
}
let arr = [1,2,3,4,5,6,7,8,9];
let result = rotateArray(arr,2);
console.log(result)

//second method optimal
function reverseArray(arr,left,right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    console.log(arr)
}
function optimalKRotation(arr, k){
    reverseArray(arr,0,arr.length-1)
    reverseArray(arr,0,k-1)
    reverseArray(arr,k,arr.length-1)
}
let arr1 = [1,2,3,4,5,6,7,8,9];
let result1 = rotateArray(arr1,2);
console.log(result1)