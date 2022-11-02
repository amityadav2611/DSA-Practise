
let array = [1,4,5,6,7,8,10]

function missingArr(arr){

    let missArray = []

    //Math.min(1,2,3) //1
    let minNum = Math.min(...arr);//1
    let maxNum = Math.max(...arr);//10

    //indexOf return its position, not there in -1
    for(let i = minNum; i < maxNum; i++){
        if(arr.indexOf(i) < 0){
            missArray.push(i);
        }
    }
    return missArray
}
console.log(missingArr(array))