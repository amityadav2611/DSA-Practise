let array = [2,4,5,6,7,1]
/*
    arr = [2,4,5,6,7,1]           -->arr[i] + arr[i+1]
          [6,9,11,13,8]
          [15,20,24,21]
          [35,44,45]
          [79,89]
          [168]     ----> stop
          
write this program using recusrsion
*/

function addAdjSum(arr){
    if(arr.length === 1){
        return arr;
    }
    let c = [];
    for(let i=0; i < arr.length-1; i++){
        if(arr[i]){
            c.push(arr[i]+arr[i+1])
        }
    }
    return addAdjSum(c)
}
const result = addAdjSum(array);
console.log(result)