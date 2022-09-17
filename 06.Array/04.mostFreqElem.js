//Given an array of repeated elements, return the most repeated element from the array highest
// frequency element in an array.
/**
 * let arr = [23,56,678,12,2,34,23,98,12,3,12,2,12]
 * 
 * step.1:- frequency counter method:- create a hash map of the above array
 * step.2:- iterate over the map and return the element with highest frequency
 */

//returned the most frequency element in an array
function mostFrequency(){
    let map = new Map();
    let arr = [1,2,3,4,5,6,7,8,1,1,1,1,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
    let maxFreq = 1;
    let maxFreqElem = arr[0];

    for(let i=0; i<arr.length; i++){
        if(map.get(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);
            if(maxFreq < map.get(arr[i])){
                maxFreq = map.get(arr[i]);
                maxFreqElem = arr[i]
            }
        }else{
            map.set(arr[i], 1);
        }
    }
    console.log(maxFreqElem, maxFreq)
    //return map
}
// let arr = [1,2,3,4,5,6,7,8,1,1,1,1,2,2,2,3,3]
// const result = mostFrequency(arr)
// console.log(result)
mostFrequency()