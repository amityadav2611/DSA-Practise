//write a program to everse each word of string in given manner
/**
 * Example:-
 *         "Concept of the Day" --> "tpecnoC fo eht yaD"
 *          "hi to all"         --> "ih ot lla"
 * 
 * how to tackle:-
 *                reverse(word) => "abcdef" => "fedcba"
 *                split the sentence based on space => ["hi", "to", "all"] and
 *                loop over the array and reverse each word usinf reverse function and keep concating with next words
 * 
 */

//step-1 --> write program to reverse a string
//step-2 --> and after that write program to reverse each word of usong reverse a string program

function reverse(str){
    if(str.length <= 1){
        return str
    }
    return reverse(str.slice(1)) + str[0]
}
// const string =  "amit";
// const result = reverse(string)
// console.log(result)

function reverseWord(sentence){
    let words = sentence.split(" "); 
    for(let i = 0; i < words.length; i++){
        words[i] = reverse(words[i]);
    }
    return words.join(" ");
}
const result = reverseWord("hi to all")
console.log(result)