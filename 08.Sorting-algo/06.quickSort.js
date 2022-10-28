/**A pivot element is picked and the partitions made around it are again recursively
 * partitioned and sorted. It is a divide and conquer algorithm.
 * Time Complexity:- O(nlog(n)) 
 * worst case time complexity:-O(n^2) 
 * 
 * 
 * Let's take a look at how Quicksort works:

1.Select an element of the array. This element is generally called the pivot. 
  Most often this element is either the first or the last element in the array.
2.Then, rearrange the elements of the array so that all the elements to the left 
  of the pivot are smaller than the pivot and all the elements to the right are greater
  than the pivot. The step is called partitioning. If an element is equal to the pivot,
  it doesn't matter on which side it goes.
3.Repeat this process individually for the left and right side of the pivot, until the array is sorted.
*/


function partition(arr, start, end) {
    const pivotValue = arr[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
        swapIndex++
        if (i !== swapIndex) {
          // SWAP
          ;[arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
        }
      }
    }
    if (swapIndex !== start) {
      // Swap pivot into correct place
      ;[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex
  }
  function quickSort(arr, start = 0, end = arr.length - 1) {
    // Base case
    if (start >= end) return
    let pivotIndex = partition(arr, start, end)
    // Left
    quickSort(arr, start, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, end)
    return arr
  }
  let array = [3,2,4,7,5,1,8,9,6]
  let result = quickSort(array)
  
  console.log(result)