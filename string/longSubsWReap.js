/**
 * 
 * given a string str, find the length of the longest substring without repeating characters.

Example 1:
Input: str = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.


Example 2:
Input: str = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.} 
 */


function lengthOfLongestSubstring(str){

    if(!str){
        return 0;
    }

    let end = 0;
    let start = 0;
    let maxLength = 0;

    const uniqueCharacters = new Set();

    while(end < str.length){
        if(!uniqueCharacters.has(str[end])){
            uniqueCharacters.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size)
        }else{
            uniqueCharacters.delete(str[start]);
            start++;
        }
    }
    return maxLength
}
const result = lengthOfLongestSubstring("abcabcbb")
console.log(result)




//working
/**
 * final string -> abcabcbb --> 7(length)
 * 
 * start = 0
 * end = 0
 * maxLength = 0
 * 
 * 
 * abcabcbb --> after if condition
 * start 0
 * end 2
 * max 3
 * 
 * bcabcbb ->  after else condition
 * start 1
 * end 3
 * max 3
 * 
 * cabcbb
 * start 2
 * end 4
 * max 3
 * 
 * abcbb
 * start 3
 * end 5
 * max 3
 * 
 * abcb
 * start 4
 * end 6
 * max 3
 * 
 * abc
 * start 5
 * end 7
 * max 3
 * 
 * We did it on the URL shortener project, so it was quite challenging for me because initially
 *  we had to fund unique Eid.
 * And the short link that we had created had to be kept valid for how many years and months 
 * it would be valid.
 * We did not call the database directly for quick response, instead had to receive the data from the cache.
 */