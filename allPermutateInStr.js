//write a program to print all permuation in a string

let str = "abc";
//ouputput -> abc acb bac bca cba cab

function purmutateStr(s, ans){
    //let ans = " ";
    if(s.length == 0){
        console.log(ans);
    }
    for(let i = 0; i < s.length; i++){ 
        let char = s[i]
        let leftStr = s.slice(0, i);
        let rightStr = s.slice(i + 1)
        let result = leftStr + rightStr;
        purmutateStr(result,ans+char)
    }

}
let ans = "  ";
purmutateStr(str, ans);