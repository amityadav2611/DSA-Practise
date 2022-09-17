//write a program to check a string is palindrome or not
/**
 * example:-
 *          madam --> madam -------------->palindrome
 *          radar --> radar -------------->palindrome
 *          malayalam --> malayalam -------->palindrome
 *          hello    --> olleh ----------->not palindrome
 * 
 * REFER :- 
 *         return(R==R && ispalindrome("EFE"))
 *        :return(R==R && E==E && ispalindrome("F"))
 */

function ispalindrome(str){
    if(str.length <= 0){
        return true;
    }
    return (str[0] == str.slice(-1) && ispalindrome(str.slice(1,-1)))
}
const result = ispalindrome("refer")
console.log(result)

//2nd logic
function ispalindrome1(str){
    if(str.length <= 1){
        return true;
    }
    if(str[0] == str.slice(-1)){
        return ispalindrome(str.slice(1,-1));
    }else{
        return false;
    }
}
const result1 = ispalindrome1("amit")
console.log(result1)