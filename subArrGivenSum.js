function subArraySum(arr,n,sum)
    {
        let currentSum = arr[0], start = 0, i;
  
        // Pick a starting point
        for (i = 1; i <= n; i++) {
            // If currentSum exceeds the sum,
            // then remove the starting elements
            while (currentSum > sum && start < i - 1) {  
                currentSum = currentSum - arr[start];
                start++;
            }
  
            // If currentSum becomes equal to sum,
            // then return true
            if (currentSum == sum) {
                let p = i - 1;
                console.log([start,p]);
                return 1;
            }
  
            // Add this element to currentSum
            if (i < n)
                currentSum = currentSum + arr[i];
        }
  
        console.log("No subarray found");
        return 0;
    }
     
    let arr=[1,4,20,3,10,5 ];
    let n = arr.length;
    let sum = 33;
    subArraySum(arr, n, sum);


// function subArraySum(arr,n,sum){
//     let left = 0;
//     let right = 0;
//     let count = 0;
//     let res = [];

//     while(right <= n){
//         if(count == sum){
//             res.push(left+1)
//             res.push(right)
//             return res;
//         }
//         if(left == right || count < sum){
//             right++;
//             count += arr[right-1];
//         }else{
//             left++;
//             count -= arr[left-1];
//         }
//     }
//     res.push(-1)
//     return res;
// }
// let arr=[1,4,20,3,10,5 ];
// // let n = arr.length;
// // let sum = 33;
// console.log(subArraySum(arr, arr.length, 33));

