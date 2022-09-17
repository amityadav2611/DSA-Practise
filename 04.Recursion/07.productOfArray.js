/**
 * let arr = [3,5,2,8]
 *           3 * product([5,2,8])
 *           3 * 5 * product([2,8])
 *           3 * 5 * 2 * product([8])
 *           3 * 5 * 2 * 8 = 240
 */

function productArray(arr){
    if(arr.length == 0){
        return 1
    }
    return arr[0] * productArray(arr.slice(1))
}
let array = [3,5,2,8];
const result = productArray(array);
console.log(result)