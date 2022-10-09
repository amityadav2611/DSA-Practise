//find second largest number in array without sorting in javascript

let array = [10,20,30,40,50,60,70]

function secondLargestElemInArr(arr){
    let firstLargest = -1;
    let secondLargest = -1

    for(let i = 0; i <= arr.length-1; i++){
        if(arr[i] > firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i];
        }
        if(arr[i] > secondLargest && arr[i] < firstLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
const result = secondLargestElemInArr(array);
console.log(result)

//O(n