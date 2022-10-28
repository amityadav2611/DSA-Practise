/** Search each and every element of the array till you find the required element
 * Time Complexity:- O(n)
 */

let array = [3,7,11,34,78,90,96,98,100]
 function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}
console.log(linearSearch(array, 78))