//Write a program to sum of all the numbers in an array

// let arr1 =[2, 20, 40, 100];
// let res = 0;
// for (let i=0; i < arr1.length; i++) {
//      res += arr1[i]
// }
// console.log(res);

function sumAllArrNum(arr){
    let res = 0;
    for(let i=0; i < arr.length; i++){
        res += arr[i];
    }
    return res
}
let array = [2, 20, 40, 100];
const result = sumAllArrNum(array);
console.log(result)