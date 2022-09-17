//Write a program to reverse a string
/**
 * "hello" -> "olleh"
 * "fur" -> "ruf"
 * 
 * example:-
 *  "hello"    -> reverse("ello") +       h
 *                reverse("llo")  +     e+h
 *                reverse("lo")   +   l+e+h
 *                reverse("o")    + l+l+e+h
 *                      o         + l+l+e+h
 */

function reverseString(str){
    if(str.length <= 1){
        return str;
    }
    return reverseString(str.slice(1)) + str[0]
}
const string = "amit"
const result = reverseString(string)
console.log(result);


//Reverse the string using recursion
function reverseStringWithRecur(arr,left,right){
    if(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        reverseStringWithRecur(arr, left+1, right-1)
    }
}
let str = "amit";
const arr = str.split("");
reverseStringWithRecur(arr, 0, arr.length-1);
str = arr.join("");
console.log(str)