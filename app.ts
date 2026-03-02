// types of variable in typescript

// String 
let myName : string = "Sana Ullah"
myName = "Siddiqui"
console.log(myName);

// Number 
let num1 : number = 1324;

// Boolean 
let isUser : boolean = true

// Array in TypeScript 

let arr : string[] = [];
arr.push('Sana Ullah')
arr.push('Siddiqui')
console.log(arr);

// add multiple type of variable in array 
// method 1
let arr1 : (string | number | boolean)[] = [];
arr1.push('TypeScript')
arr1.push(1234);
arr1.push(true)
console.log( arr1);

// method 2
let arr11 : Array<string | number | boolean> = [];
arr11.push('TypeScript')
arr11.push(1234);
arr11.push(true)
console.log(arr1);


// add any variable types of variable in array
let arr2 : (any)[] = []
console.log(arr2)

// Function 

function fn(a:string, b:string): void {
    console.log(a, b);
}
fn("Sana Ullah", "Siddiqui");

function fn1 (a: string, b:number, c:string) {
    console.log(a,b,c)
}

fn1("Sana Ullah", 19, "Siddiqui");

// Object and type alias 

type UserObj = {
    name : string;
    email : string;
    password: string;
    isLogedIn : boolean;
};

let user :  UserObj = {
    name : "Sana Ullah Siddiqui",
    email: "sanaullah@gmail.com",
    password: "34324@#$3sana",
    isLogedIn: true
};