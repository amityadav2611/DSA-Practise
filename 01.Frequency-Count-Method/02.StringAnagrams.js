//check string is anagram or not
/**
 * step1. check length (for both string) -> length must tbhe same 
 * step2. compare the string if it is equal then it is anagram otherwise not anagram
 */

let word1 = "night";
let word2 = "thing"

function isAnagramOrNot(str1,str2){
    if(str1.length !== str1.length){      //check both length of string is equal or not
        return false;
    }

    let counter = {}                    //create a object for storing the string
 
    for(let letter of str1){            // traverse the loop on string 1
        counter[letter] = (counter[letter] || 0) + 1      //agar counter me letter hai to return karo nahi to usme letter add karo 1 letter increase karke wapas karo
    }
    for(let items of str2){                             //here we can traverse the loop on string 2
        if(!counter[items]){                           //check kar rhe hai ki agar string2 ka items string 1 ke letter se match kar rha hai ya nahi agar nahi kiya hai to "false return kare"
            return false;
        }
        counter[items] -= 1                         //aur agar string2 ke itmes string1 ke letter se match kar rhe hai to string2 ke items me se ek ek letter minus karte jaao
    }
    return true;                                    //aur finally counter me zero bachta hai to use return true kar do it means wo ab ek anagrams hai 
}
const check = isAnagramOrNot(word1,word2)
console.log(check)


//time complexity = O(n)