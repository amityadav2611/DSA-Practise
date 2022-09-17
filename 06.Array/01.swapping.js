//swap two variable
let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a)
console.log(b)


//swap two variable without using third variable
let x = 30;
let y = 40;

x = x+y;
y = x-y;
x = x-y;

console.log(x);
console.log(y);



//swap two string without using third string

let p = "something"
let q = "good"

//using third variable
// let temp1 = p
// p = q
// q = temp1
// console.log("p is good --> ",p)
// console.log("q is something -->",q)


//without using third variable
//ES5 method
q = [p, p = q][0]
console.log(p,q)

//ES6 method
// [p, q] = [q, p]
// console.log(p,q)


let a1 = "hello";
let b1 = "world";
[a1, b1] = [b1, a1];
console.log(a1, b1); // World! Hello