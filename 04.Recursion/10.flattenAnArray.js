//write a program to flatten an array or convert 2d to 1d array
/**
 * Example:- 
 *         let arr = [1,2,[3,4,5],[6,7]] ==> [1,2,3,4,5,6,7]
 *  logic:-
 *         [1] concat with flattenArr ([2,[3,4,5],[6,7]])
 *         [1,2] concat with flattenArr ([3,4,5],[6,7])
 *         [1,2] concat with flattenArr ([3,4,5]) concat with flattenArr([6,7])
 *         [1,2,3,4,5] concat with flattenArr ([6,7])
 *         [1,2,3,4,5,6,7]  --> it is output
 * 
 *  Note:-
 *        It will check each element one by one if the element is not in array then it will concat the
 *        element in the "new" array
 *        else if the element in itself is an array then it will try to flatten that element
 * */ 

function flattenArr(arr){
    let flatten = []
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i]) == false){
            flatten.push(arr[i])
        }else{
            flatten = flatten.concat(flattenArr(arr[i]))
        }
    }
    return flatten
}
const result = flattenArr([1,2,[3,4,5],[6,7]])
console.log(result)