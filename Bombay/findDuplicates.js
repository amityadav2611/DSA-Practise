// Find duplicates in the array
//write the duplicates in an array
/**
 * Example:-
 *         [23,3,2,1,3,1]
 *         let frequency = {
 *                          23 : 1,
 *                           3 : 2,
 *                           2 : 1,
 *                           1 : 2   
 *                          }
 * 
 * loop over all keys of frequency and collect wherever value(frequency) is > 1
 */

function duplicatesArr(arr) {
    let frequency = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (frequency.get(arr[i]) == undefined) {
            frequency.set(arr[i], 1)
        } else {
            frequency.set(arr[i], frequency.get(arr[i]) + 1)
        }
    }
    //console.log(frequency)
    let res = []
    for (let pairs of frequency) {
        if (pairs[1] > 1) {
            res.push(pairs[0])
        }
    }
    return res
}
const result = duplicatesArr([23, 3, 2, 1, 3, 1])
console.log(result)



//----------------------------------------------using set method-----------------------------
const numbers = [23, 3, 2, 1, 3, 1];

function duplicatesArr1(arr) {
    const set = new Set(numbers);
    //console.log("-->",set)

    const duplicates = numbers.filter(item => {
        if (set.has(item)) {
            set.delete(item);
        } else {
            return item;
        }
    });
    return duplicates
}
let result1 = duplicatesArr1(numbers)
console.log(result1)



//--find unique in using short--
var arr = [55, 44, 65,1,2,3,3,34,5];
var unique = [...new Set(arr)]
console.log(unique)

//just  var unique = new Set(arr) wont be an array