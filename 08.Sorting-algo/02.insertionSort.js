/**The array is split into sorted and unsorted parts. Unsorted elements are
 * picked and placed at thier correct position in the sorted part.
 * Time Complexity:- O(n^2)
 * 
 * 
 * what is insertion sort:-
 * Insertion sort is a simple ordering of elements technique that sorts the elements of a given 
 * data structure in ascending or descending order whose approach is identical to the sorting of 
 * playing cards. This sorting technique has various applications such as database sorting, sorting 
 * customer entries, sorting data in data visualization, or arranging form data in web apps.
 */


 function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
insertionSort(inputArr);
console.log(inputArr);