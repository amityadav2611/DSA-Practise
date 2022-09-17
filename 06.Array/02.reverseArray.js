//Reverse array without using extra array.
// arr = [12,4,67,2,34] => [34,2,67,4,12]

let array = [12,4,67,2,34];

function reverseArr(arr){
    let i = 0;
    let j = arr.length-1;

    while(i<j){
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j] 
        arr[i] = arr[i] - arr[j]
        i++;
        j--;
    }
    return arr;
}
const result = reverseArr(array);
console.log(result)