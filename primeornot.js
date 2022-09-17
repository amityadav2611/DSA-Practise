function primeOrNot(n) {         
    let flag = true;
    for(let i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
    if (flag == true)
        return "Prime"
    else
        return "Not a prime"

}
const result = primeOrNot(1)
console.log(result)  