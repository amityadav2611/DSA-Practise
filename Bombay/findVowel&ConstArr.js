//calculate the number of vowels and consonants in a string

//--------------------------print all vowels and consonants in the string--------------------------
// function filterVowelsAndConsonants(s) {
//     for (var i in s.split('')) {
//         if (['a', 'e', 'i', 'o', 'u'].includes(s.split('')[i])) {
//             console.log("here is vowels", s.split('')[i]);
//         }
//     }
//     for (var i in s.split('')) {
//         if (!(['a', 'e', 'i', 'o', 'u'].includes(s.split('')[i]))) {
//             console.log("here is consonant", s.split('')[i]);
//         }
//     }
// }
// // let str = "My name is khan"
// // const result = filterVowelsAndConsonants(str)
// // console.log(result)
// filterVowelsAndConsonants("prashantKumarYadav")


//-----------------------------count the vowels and string---------------------------------------------
function countVowelsCons(inputString){ 
     
    let vow = 0; 
    let cons = 0; 
     
    for(let i = 0; i < inputString.length; i++){ 
        let ele = inputString[i]; 
        if(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u') 
            vow += 1; 
        else 
            cons += 1; 
    }; 
    //console.log(`${inputString}`) 
    console.log(`${vow} vowels present`); 
    console.log(`${cons} consonants are present.`); 
}; 
countVowelsCons("prashantKumarYadav"); 