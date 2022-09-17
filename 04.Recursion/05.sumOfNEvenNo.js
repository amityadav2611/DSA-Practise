//Find the sum of n even numbers
//method:- 0,2,4,6,8,10 --> 2n-2
// let sumOfNEvenNum(6) --> 2*6-2 + 2*5-2 + 2*4-2 + 2*3-2 + 2*2-2 + 2*1-2  -->1 is the last n

function sumOfNEvenNum(n){
    if(n === 1){
        return 0
    }else if(n <= 0){
        return "No sum"
    }else{
        return 2*n-2 + sumOfNEvenNum(n-1)
    }
}
const result = sumOfNEvenNum(8)
console.log(result)


//Find the sum of n odd number
//method:- 1,3,5,7,11,13 --> 2n-1 --> 2*1-1 = 1, 2*2 - 1 = 3, 2*3-1 = 5
//let sumOfNOddNum(6) --> 2*6-1 + 2*5-1 + 2*4-1 + 2*3-1 + 2*2-1 + 2*1-1 --> 1 is the last n

function sumOfNOddNum(n){
    if(n == 1){
        return 1
    }else if(n <= 0){
        return "No sum"
    }else{
        return 2*n-1 + sumOfNOddNum(n-1)
    }
}
const oddResult = sumOfNOddNum(3)
console.log(oddResult)