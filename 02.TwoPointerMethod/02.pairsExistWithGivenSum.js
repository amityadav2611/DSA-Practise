//Given a sorted array of integer find whether a pair exist with given sum
/**
 * const arr = [1,4,5,7,9,10]  ---> input
 * [a+b = given sum] ---> ouput
 */

let arr = [1,4,5,7,9,10]
function givenPairsSumIsExistOrNot(array,sum){
    let isPairExist = false;
    let left = 0;
    let right = array.length-1

    while(left < right){

        let sum1 = array[left] + array[right]

        if(sum1 === sum){
            isPairExist = true;
            break;
        }else if(sum1 > sum){
            right--;
        }else{
            left++;
        }
    }
    return isPairExist;
}

let result = givenPairsSumIsExistOrNot(arr,11)
console.log(result)