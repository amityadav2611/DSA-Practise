//Return the sum of 1 to n
/**
 * add up to 10 tak
 * like 1+2+3+4+5+6+7+8+9+10
 * output = 55
 */

function sumOfOneToN(n){
    if(n === 1){                //base case min 1 tak aane par 1 return kar de
        return 1 
    }
    // let sumOfNM1 = sumOfOneToN(n-1)
    // let sumOfN = n + sumOfNM1
    // return sumOfN

    return n + sumOfOneToN(n-1)    //10 + sumOfOneToN(10-1) + 9 + sumOfOneToN(9-1) 8 + sumOfOneToN(8-1)
}
const result = sumOfOneToN(100)
console.log(result)