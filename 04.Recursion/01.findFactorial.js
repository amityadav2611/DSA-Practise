//find the factorial using recursion
/**
 * Thus, factorial seven is written 7!, meaning 7 × 6 × 5 × 4 × 3 × 2 × 1
 * 
 * factorial(n) = n * factorial(n-1) , where n = 3
 *                n * n-1 * fact(n-2)
 *                n * n-1 * n-2 * fact(n-3)
 *                n * n-1 * n-2 * n-3
 */


function factorial(n){
    if(n===1){
        return 1
    }
    let fnm1 = factorial(n-1)
    let fn = n * fnm1
    return fn
}
const result = factorial(5)
console.log(result)


//Through iteration
function fact(n){
    let result = 1;
    for(let i = n; i > 0; i--){
        result = result * i;
    }
    return result;
}
const iterationResult = fact(5);
console.log(iterationResult)

