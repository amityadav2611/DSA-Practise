// // program to check if a number is integer value
// function checkNumber(x) {

//     // check if the passed value is a number
//     if(typeof x == 'number' && !isNaN(x)){
    
//         // check if it is integer
//         if (Number.isInteger(x)) {
//             console.log(`${x} is integer.`);
//         }
//     }
// }
// checkNumber("ss");

let a = 167

function inte(a){
    if(typeof a === 'string') return 'not a intizer'

   let x = `${a}`
   //console.log(x)
    for(let i=0;i<x.length;i++){
        if(x[i] === '.' || x[i] === '/'){
            return 'Not a intizer'
        }
    }
    return "it's a NUmber"
}

console.log(inte(a))



















// // program to check if a number is a float or integer value
// function checkNumber(x) {

//     // check if the passed value is a number
//     if(typeof x == 'number' && !isNaN(x)){
    
//         // check if it is integer
//         if (Number.isInteger(x)) {
//             console.log(`${x} is integer.`);
//         }
//         else {
//             console.log(`${x} is a float value.`);
//         }
    
//     } else {
//         console.log(`${x} is not a number`);
//     }
// }

// checkNumber('hello');
// checkNumber(44);
// checkNumber(3.4);