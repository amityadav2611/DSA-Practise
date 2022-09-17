//multiply 
//const arr = [5,4,3,2,1]
function multiply(arr,n){
    if(n===0){
        return arr[0]
    }
    return (arr[n] * multiply(arr,n-1))
}
let result = multiply([5,4,3,2,1],5)
console.log(result)