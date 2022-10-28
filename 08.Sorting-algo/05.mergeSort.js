/**Repeatedly divide the array into half, sort the halves and then combine them.
 * It is a divide and conquer algorithm
 * Time Complexity: O(nlog(n))
 * 
 * 
 * Merge sort uses the concept of divide-and-conquer to sort the given list of elements.
 *  It breaks down the problem into smaller subproblems until they become simple enough
 *  to solve directly.

Here are the steps Merge Sort takes:

1.Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
2.Continue dividing the subarrays in the same manner until you are left with only single element arrays.
3.Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
4.Repeat step 3 unit with end up with a single sorted array.
 */



  function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }

  function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }
  console.log(mergeSort([5,10,2,23,45,21,7])) // [1, 3, 5, 5, 8, 99]