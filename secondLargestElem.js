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
const result = secondLargestElemInArr([5,7,1,2,3,4,6,12]);
console.log(result)

//O(n
