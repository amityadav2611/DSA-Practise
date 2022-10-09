//Find Prime numbers 1-100

function prime1To100(lower, higher) {
    // looping from lowerNumber to higherNumber
    for (let i = lower; i <= higher; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
let array = prime1To100(1, 100);



// function largestPrime(arr){
//     let max = 0

// }