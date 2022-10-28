//find the pair of numbers having largest sum in an array of integers

function findLargestSumPair(arr)
{
    // Initialize first and
    // second largest element
    let first, second;
    if (arr[0] > arr[1])
    {
        first = arr[0];
        second = arr[1];
    }
    else
    {
        first = arr[1];
        second = arr[0];
    }
   
    // Traverse remaining array and
    // find first and second largest
    // elements in overall array
    for (let i = 2; i < arr.length; i ++)
    {
        /* If current element is greater
           than first then update both
           first and second */
        if (arr[i] > first)
        {
            second = first;
            first = arr[i];
        }
   
        /* If arr[i] is in between first
           and second then update second */
        else if (arr[i] > second &&
                 arr[i] != first)
            second = arr[i];
    }
    return (first + second);
}
   
let array = [12, 34, 10, 6, 40];
const result = findLargestSumPair(array);
console.log(result)
