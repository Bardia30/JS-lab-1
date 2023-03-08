// #1

let num = 3 + 5;
console.log(num);

// #2

firstName = "Bardia";
lastName = "Dehbasti";
fullName = firstName + " " + lastName;
console.log(fullName);

//#3

const right = true;
const wrong = false;

console.log(right && wrong);//false
console.log(right||wrong); //true

//#4
console.log((3+5)*11);

//#5 
console.log(10 !== 5);

//#6
console.log(10 ===  5);

//#7
console.log(10 < 5);

//#8
console.log(2=="2"); //true
console.log(2 === "2"); //false


//#9
let remainder = 10 % 3;
console.log(remainder); 


//#10 
let str = "string"
console.log(typeof str);

let number = 2342345124537;
console.log(typeof number);

let bool = true;
console.log(typeof bool);

let none = null;
console.log(typeof none);

let undeclared;
console.log(typeof undeclared);

let big = Infinity;
console.log(typeof big);


function addNumber (num1,num2) {
    return num1 + num2;
};

const addNumber2 = (number1,number2) => {
    return number1+number2
};

console.log(addNumber(17,25));

console.log(addNumber2(17,25));








