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

 function duplicates(arr){
    let frequency = new Map()
    for(let i=0; i < arr.length; i++){
        if(frequency.get(arr[i]) == undefined){
            frequency.set(arr[i], 1)
        }else{
            frequency.set(arr[i], frequency.get(arr[i]) + 1)
        }
    }
    let res = []
        for(let pairs of frequency){
            if(pairs[1] > 1){
                res.push(pairs[0])
            }
        }
        return res
}
const result = duplicates([23,3,2,1,3,1])
console.log(result)



