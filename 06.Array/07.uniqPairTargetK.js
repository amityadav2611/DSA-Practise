/**
 * find unique pairs of elements (inside on array) where sum is equal to a target k
 * let arr = [7,2,4,6,9,11,34,3,2,1]
 * let k = 5;
 * res = (2,3), (4,1) --> unique
 * 
 * solving using frequency count method:
 * step:1- create a map frequency counter of the above array
 * map of arr = {
 *               7 : 1,
 *               2 : 2,
 *               4 : 1,
 *               6 : 1,
 *               9 : 1,
 *               11 : 1,
 *               34 : 1,
 *               3 : 1,
 *               1 : 1
 *              }
 * step:2- iterate over the map and check if k pairs[0] is present in the map...if yes
 * then add pairs in a seperate map but at time of adding you can check if the pair already exists in the map
 * if not then goto next element
 */


let array = [7,2,4,6,9,11,34,3,2,1];
function uniqPairTargetK(arr,k){
    let map = new Map()
    for(let i = 0; i < arr.length; i++){
        if(map.get(arr[i]) == undefined){
            map.set(arr[i], 1)
        }else{
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    //console.log(map)
    let res  = [];
    for(let pairs of map){
        if(pairs[0]){
            res.push(pairs[0])
        }
    }    
}
console.log(uniqPairTargetK(array,5))