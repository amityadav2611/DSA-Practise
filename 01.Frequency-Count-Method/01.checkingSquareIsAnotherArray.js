//Given two array
/**A = [2,4,2,6] 
*  B = [4,36,4,16] 

Obj A = {
    "2": 2,
    "4": 1,
    "6": 1
}
Obj B = {
    "4": 2,
    "16": 1,
    "36": 1
}

optimization psedo code
For(i in A){
    ObjA[A[i]] += 1
}
For(i in B){
    ObjB[B[i]] += 1
}
For(key in Obj A){
    ObjB[key*key]!== ObjeA[key]
    return false;
}
return true;
*/

let array1 = [2,4,2,6];
let array2 = [4,36,4,16]

//Step 1: create map object for both array
// map1 = {2:2,4:1,6:1}
// map2 = {4:2,16:1,36:1}

function checkSquareArr(array1, array2){
let map1 = {};
let map2 = {};

for(let item of array1){
    map1[item] = (map1[item] || 0) + 1
}
for(let item of array2){
    map2[item] = (map2[item] || 0) + 1
}
console.log(map1)
console.log(map2)

for(let key in map1){ 
    if(!map2[key*key]){           //obj keys compare in term of square 
        return false;
    }
   if(map1[key] !== map2[key*key]){   //value compare
   return false; 
   }
}
return true;
}
const res = checkSquareArr(array1,array2);
console.log(res)


//time complexity = O(n)