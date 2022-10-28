/**Works by swapping adjacent elements in repeated passes, if they are not in correct order.
 * High time complexity and not suitable for large datasets.
 * Time Complexity:- O(n^2)
 */

/**
 * check the elements adjacent to each other and swap them if left element  is greater than right element
 * and sort them
 * Time complexity
 * worst : n*n = O(n^2)
 * best : n = O(n)
 * avg : n*n = O(n^2)
 */

let array = [233,12,6,89,34,56]
function bubbleSort(arr){
    for(let i=0; i <= arr.length-1;i++){
        let swap = false;
        for(let j = 0; j <= arr.length-2; j++){
            if(arr[j] > arr[j+1]){
                arr[j] = arr[j] + arr[j+1]
                arr[j+1] = arr[j] - arr[j+1]
                arr[j] = arr[j] - arr[j+1]
                swap = true;
            }
        }
        if(swap == false) break;
    }
    return arr;
}
console.log(bubbleSort(array))

