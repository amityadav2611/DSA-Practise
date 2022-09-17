//find unique element in an array
// arr[1,2,4,5,2,7,6,4,20,25,6] --> [1,5,7,20,25]

function uniqueElem(arr){
    let map = new Map();
    for(let i=0; i < arr.length; i++){
        if(map.get(arr[i]) == undefined){
            map.set(arr[i],1)
        }else{
            map.set(arr[i], map.get(arr[i]) + 1)
        }
    }
    let res = [];
    for(let pairs of map){
        if(pairs[1] == 1){
            res.push(pairs[0])
        }
    }
    return res;
}
const result = uniqueElem([1,2,4,5,2,7,6,4,20,25,6])
console.log(result)