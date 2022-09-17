//Find the maximum Occurrence of a character in an array --> not completly done ouput is wrong

const arr = ['1','8','8','6','1','2','5','5','1','9','1','9','1','8','6','9','0','1','9','2']

//1 -> 5, 8 -> 3, 6 -> 2, 2 -> 2, 5 -> 3, 9 -> 3, 0 -> 2

function checkMaxOccCharInArr(array){

    let max_Occurrence = 0;
    let max_Occurrence_Char = null;
    let freqObject = {}

    for(let i = 0; i < array.length; i++){
        if(freqObject.hasOwnProperty[array[i]]){
            freqObject[array[i]] += 1
        }else{
            freqObject[array[i]] = 1;
        }
        //console.log(freqObject)
        if(max_Occurrence < freqObject[array[i]]){
            max_Occurrence = freqObject[array[i]]
            max_Occurrence_Char = array[i]
        }
    }
    return max_Occurrence_Char
}
let result = checkMaxOccCharInArr(arr)
console.log(result)
