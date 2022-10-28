//Find Prime numbers 1-100

function prime1To100(lower, higher) {
    // looping from lowerNumber to higherNumber
    let maxPrime = -Infinity;
    let secondMaxPrime = -Infinity;
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
prime1To100(1, 100);
console.log("\n")



//-----------------------------------------second prime number--------------------------------------

console.log("below is the second prime number")
function primeSecond1To100(lower, higher) {
    for (let i = lower; i <= higher; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            let maxPrime = -Infinity;
            let secondMaxPrime = -Infinity;
            if(i > maxPrime){
                secondMaxPrime = maxPrime
                maxPrime = i;
            }
            if(i > secondMaxPrime && i < maxPrime){
                secondMaxPrime = i;
            }

            return secondMaxPrime;
        }
        console.log(i)
    }
}
primeSecond1To100(1, 100);