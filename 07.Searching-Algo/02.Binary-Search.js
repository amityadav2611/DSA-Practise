/**Searches for the element by comparing it with the middle item of the sorted array.
 * If a match occurs, index is returbed, else the searching area is reduced appropriately
 * to either the upper half or lower half of the array.
 * Time complexity : O(log2n) --> log base2 n
 */

/**
 * when we search half half then this typeof search is called binary search
 * time complexity - O(logn)
 * -->best case scenario : (O(1))
 * -->worst case scenario : O(logn)
 * -->average case scenario : O(logn)
 */

let array = [3,7,11,34,78,90,96,98,100]

// function binarySearch(arr,start = 0,end = arr.length-1,num){
    
//     if(end >= start){
//         let mid = Math.round(start+end)/2;
//     if(num == arr[mid]){
//         return binarySearch(arr,mid+1,end,num)
//     }else if(num < arr[mid]){
//         return binarySearch(arr,start,mid-1,num)
//     }else{
//         return false;
//     }
// }
// }
// console.log(binarySearch(array,3,100,78))


//bottem-up approach
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === val) {
        return mid;
      }
  
      if (val < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  console.log(binarySearch(array,78))


  //recursive approach
  function binarySearch(arr, val, start = 0, end = arr.length - 1) {
    const mid = Math.floor((start + end) / 2);
  
    if (val === arr[mid]) {
      return mid;
    }
  
    if (start >= end) {
      return -1;
    }
  
    return val < arr[mid]
      ? binarySearch(arr, val, start, mid - 1)
      : binarySearch(arr, val, mid + 1, end);
  }
  console.log(binarySearch(array, 78))