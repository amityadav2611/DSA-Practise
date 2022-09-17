//find the largest sum of consecutive digits

function findLargest(array, num){
    if(num > array){
        throw new Error("num is not greater than array")
    }else{
        let max = 0;
        for(let i = 0; i< array.length-num; i++){
            let tmp = 0;
            for(let j=0; j<num; j++){
                tmp += array[i+j]
            }
            if(tmp > max){
                max = tmp;
            }
        }
        return max;
    }
}
const result = findLargest([1,2,3,4,3,5,4,6,7,8], 4)
console.log(result)

function pqr(){
    for(;;){
    let a=10;
    const b=20;
    var c=30;
    }
     console.log(a,b,c);
    }
    pqr()
    console.log(c)
 