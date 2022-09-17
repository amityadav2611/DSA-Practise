/**
 * 1,1,2,3,5,8,13,21,34,55,89, ......n
 * 
 * Program to take n input and find the nth number in the fibonacci series.
 * 
 * fibo(n) = fibo(n-1) + fibo(n-2)
 * fibo(5) = fibo(4) + fibo(3)
 */

function fibo(n){
    if(n <= 2){
        return 1
    }
    return fibo(n-1) + fibo(n-2)
}
const result = fibo(6)
console.log(result)