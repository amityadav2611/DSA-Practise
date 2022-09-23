//Find fiboancci number using recursion
/**
 * 0,1,1,2,3,5,8,13,21,34,55,89, ......n
 * 
 * Program to take n input and find the nth number in the fibonacci series.
 * 
 * fibo(n) = fibo(n-1) + fibo(n-2)
 * fibo(5) = fibo(4) + fibo(3)
 */

 function fibo(n){
    if(n == 1){
        return 0;
    }
    if(n == 2){
        return 1;
    }

    return fibo(n-1) + fibo(n-2)
}
const result = fibo(8)
console.log(result)


//find fibonacci number using loop

function fiboancci(num){
    let num1 = 0;
    let num2 = 1;
    let sum;

    for(let i=0; i < num; i++){
        sum = num1 + num2;
        num1 = num2;
        num2 =  sum;
    }
    return num2
}
const result1 = fiboancci(5);
console.log(result1)


//Find the fibonacci series up to n terms
let n = 5, firstTerm = 0, secondTerm = 1;
    console.log("Fibonacci Series till " + n + " terms:");

    for (let i = 1; i <= n; ++i) {
      console.log(firstTerm);

      // compute the next term
      let nextTerm = firstTerm + secondTerm;
      firstTerm = secondTerm;
      secondTerm = nextTerm;
    }


//Find the fibonacci series upto n number
    function fibbonaciToNum(num) {
        let current = 0;
        let arr = [0, 1];
        for (let i = 1; i < arr.length; i++) {
            current = arr[i] + arr[i - 1]
            if (current <= num) {
    
                arr.push(current);
            }
        }
        return arr;
    }
    
    const result3 = fibbonaciToNum(10);
    console.log(result3)