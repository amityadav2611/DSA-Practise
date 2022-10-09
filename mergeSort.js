// // let arr = [5,10,2,23,45,21,7];

// // function mergeSort(arr, start, end){
// //     if(start >= end){
// //         return arr;
// //     }
// //     let mid = Math.round(start+end)/2;
// //     mergeSort(arr,start,mid);
// //     mergeSort(arr,mid+1,end);
// //     merge(arr,start,mid,end)
// // }

// // function merge(arr, start, mid, end){
// //     let arr1 = [];
// //     let arr2 = [];

// //     let lenArr1 = mid-start+1;
// //     let lenArr2 = end - mid;

// //     for(let i = 0; i < lenArr1; i++){
// //         arr[i] = arr[start+i]
// //     }

// //     for(let j=0; j < lenArr1; j++){
// //         arr[j] = arr[mid+1+j]
// //     }

// //     let a = 0;
// //     let b = 0;
// //     let c = start;

// //     while(a < lenArr1 && b < lenArr2){
// //         if(arr1[a] <= arr2[b]){
// //             arr[c] = arr1[a]
// //             a++;
// //         }else{
// //             arr[c] = arr2[b]
// //             b++;
// //         }
// //         c++;
// //     }

// //     while(a < lenArr1){
// //         arr[c] = arr[a]
// //         a++;
// //         c++;
// //     }

// //     while(b < lenArr2){
// //         arr[c] = arr2[b];
// //         b++;
// //         c++;
// //     }
// // }
// // const result = mergeSort(arr);
// // console.log(result)


// //----------------------------------------------------------------------------------------------------------------


// // function mergeSort(array) {
// //     const half = array.length / 2

// //     // Base case or terminating case
// //     if(array.length < 2){
// //       return array 
// //     }

// //     const left = array.splice(0, half)
// //     return merge(mergeSort(left),mergeSort(array))
// //   }


// // function merge(left, right) {
// //     let arr = []
// //     // Break out of loop if any one of the array gets empty
// //     while (left.length && right.length) {
// //         // Pick the smaller among the smallest element of left and right sub arrays 
// //         if (left[0] < right[0]) {
// //             arr.push(left.shift())  
// //         } else {
// //             arr.push(right.shift()) 
// //         }
// //     }

// //     // Concatenating the leftover elements
// //     // (in case we didn't go through the entire left or right array)
// //     return [ ...arr, ...left, ...right ]
// // }
// //   array = [4, 8, 7, 2, 11, 1, 3];
// //   console.log(mergeSort(array));


// //---------------------------------------------------------------------------------------------------------

//   function merge(left, right) {
//     let sortedArr = [] // the sorted items will go here
//     while (left.length && right.length) {
//       // Insert the smallest item into sortedArr
//       if (left[0] < right[0]) {
//         sortedArr.push(left.shift())
//       } else {
//         sortedArr.push(right.shift())
//       }
//     }
//     // Use spread operators to create a new array, combining the three arrays
//     return [...sortedArr, ...left, ...right]
//   }

//   function mergeSort(arr) {
//     // Base case
//     if (arr.length <= 1) return arr
//     let mid = Math.floor(arr.length / 2)
//     // Recursive calls
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)
//   }
//   console.log(mergeSort([5,10,2,23,45,21,7])) // [1, 3, 5, 5, 8, 99]






//////////////////////////////////////////////////////////////

function merge(array1, array2) {
  let result = []
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i])
      i++
    } else {
      result.push(array2[j])
      j++
    }
  }

  while (i < array1.length) {
    result.push(array1[i])
    i++
  }

  while (j < array2.length) {
    result.push(array2[j])

    j++
  }
  return result

}



function mergeSort(array) {
  if (array.length === 1) return array

  let mid = Math.floor(array.length / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)


  console.log(left)
  console.log(right)

  return merge(mergeSort(left), mergeSort(right))

}


var res = mergeSort([9, 0, 6, 2, 3, 4, 2, 8, 7, 8])

console.log(res)