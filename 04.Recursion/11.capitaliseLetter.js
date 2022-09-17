//write a program to capitalise the first letter of all the strings in an array of strings.
/**
 * Example:-
 *         ["hi","hello","hola"] --> ["Hi","Hello","Hola"]
 *         ["abc","pqr","xyz"] --> ["Abc","Pqr","Xyz"]
 * 
 * logic:
 *       capitalizeFn(["abc","pqr","xyz","jkl"])   ==> ["Abc","Pqr","Xyz","Jkl"] --> output
 *       ["Abc"] concat with capitaliseFn(["Pqr","Xyz","Jkl"])
 *       ["Abc"] concat with capitaliseFn["Pqr"] concate with capitaliseFn(["Xyz","Jkl"])
 *       ["Abc"] conacat with capitaliseFn["Pqr"] concate with capitaliseFn["Xyz"] concate with capitaliseFn(["Jkl"])
 *       ["Abc"] conacat with capitaliseFn["Pqr"] concate with capitaliseFn["Xyz"] concate with capitaliseFn["Jkl"]
 */

function capitaliseFn(arr){
    let result = []
    if(arr.length == 0){
        return []
    }
    let s = arr[0][0].toUpperCase()+arr[0].slice(1)
    result.push(s)
    return result.concat(capitaliseFn(arr.slice(1)))
}
const result = capitaliseFn(["abc","pqr","xyz","jkl"]);
console.log(result)