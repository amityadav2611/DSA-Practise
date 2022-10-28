//input ---> aaabbaacccddh
//ouput -->  a5b2c3d2

// const freq = (str) => {
//     let map = new Map()
//     for(let i = 0 ; i < str.length ; i++ ){
//         if(map.get(str[i])){
//             map.set(str[i],map.get(str[i])+1)
//         }else{
//             map.set(str[i] , 1)
//         }
//     }
//     console.log(map)
//     let result = ""
//     for(let [key,value] of map) {
//         result =result+key+value
//     }
//     return result
// }
// console.log(freq("aaabbaacccddh"))



// //input ---> aaabbaacccddh
// //ouput -->  a5b2c3d2h  --> if one string left then print same string  not count
// const freq1 = (str) => {
//     let map = new Map()
//     for(let i = 0 ; i < str.length ; i++ ){
//         if(map.get(str[i])){
//             map.set(str[i],map.get(str[i])+1)
//         }else{
//             map.set(str[i] , 1)
//         }
//     }
//     let result = ""
//     for(let [key,value] of map) {
//         if(value == 1){
//             result = result + key
//         }else{
//         result =result+key+value
//         }
//     }
//     return result
// }
// console.log(freq1("aaabbaacccddh"))








//input ---> aabbcde
//ouput -->  2a2b1c1d1e
//final output --> --2--a--2--b1c1d1e

const freq2 = (str) => {
    let map = new Map()
    for(let i = 0 ; i < str.length ; i++ ){
        if(map.get(str[i])){
            map.set(str[i],map.get(str[i])+1)
        }else{
            map.set(str[i] , 1)
        }
    }
    //console.log(map)
    let result = ""

    for(let [key,value] of map) {
        if(value > 3){
            
        }else{
         result =result+value+key
        }
        
    }
     return result
}
console.log(freq2("aabbcde"))



// if(value == 1){
        //    // return "--"+result+value+"--"+result+key+"--"+result+value+"--"+
        //    result1 = result1+value+key
        // }
        // if(value == 2){
        //      return  "--"+result2+value+"--"+result2+key+"--"+result2+value+"--"+result2+key
        // }
        // result3 = result2+result1
        //else{