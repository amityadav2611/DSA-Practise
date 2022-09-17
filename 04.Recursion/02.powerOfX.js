//find the power of x using recursion
function powerOfX(n,x){
    if(x === 0){
        return 1
    }
    return n * powerOfX(n, x-1)
}
const result = powerOfX(3,2)
console.log(result)