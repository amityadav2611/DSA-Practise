/**
 * Given an array like arr = [1,1,2,22,3,5,11,2]
 * filter out duplicates elements and given unique element in arr
 * 
 * step:1- map for frequency counting
 * step:2- iterate one this map and whenever the frequency count is 1, push it into the result
 * like 
 *      map = {
 *              1 : 2,
 *              2 : 2,
 *              22 : 1,
 *              3 : 1,
 *              5 : 1,
 *              11 : 1 
 *             }
 * 
 * loop over this map
 * for...of over map and then pair[1] == 1 ; res.push(pairs[0])
 *  */

let array = [1,1,2,22,3,5,11,2]
function uniquElem(arr){
    let map = new Map();

    for(let i = 0; i < arr.length; i++){
        if(map.get(arr[i]) == undefined){
            map.set(arr[i], 1)
        }else{
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    //console.log(map)
    let res = []
    for(let pairs of map){
        if(pairs[1] == 1 ){
            res.push(pairs[0])
        }
    }
    return res;
}
const output = uniquElem(array);
console.log(output);