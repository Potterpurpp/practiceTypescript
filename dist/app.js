"use strict";
//Basic
let firstName = "Potter";
let isWorking = false;
console.log(`ชื่อ = ${firstName}`);
//any & unknown   มี กับ ไม่มี การตรวจสอบชนิดข้อมูล
function formatNumber(num) {
    return num.toFixed(2); // toFixed ใช้แค่ type number เท่าระเร
}
let money = "20.1213";
money = 90.124; // money = "39.21313"     //แตกเลยเพราะ toFixed()
console.log(formatNumber(money));
let money2 = "309.212";
if (typeof money2 === "number") {
    console.log(formatNumber(money2));
}
// Type Assertions
let username;
username = "Jkrowling";
console.log(username.toUpperCase()); // วิธีแรก
username.toLowerCase(); // วิธีืี่สอง
//Switch Case
let service = 1;
let resultBank;
switch (service) {
    case 1:
        resultBank = "Check money in account";
        break;
    case 2:
        resultBank = "Deposit";
        break;
    default:
        resultBank = "Failed to access";
        break;
}
console.log(`ผลลัพธ์ = ${resultBank}`);
//for loop
let users = ["Apple", "Banana", "Chocolate"];
for (let count = 0; count < 3; count++) {
    console.log(count);
}
for (let count = 0; count < users.length; count++) {
    console.log(users[count]);
}
//function
function checkNumber(num) {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
}
function printWord(kum) {
    console.log(kum);
}
const minus = (a, b) => {
    a = 10,
        b = 20;
    return a + b;
};
printWord("Hey Void");
//object 
const person1 = {
    name: "Owen",
    age: 20,
    address: "124"
};
const person2 = { name: "Joji", age: 30 };
showDetailPerson(person1);
//Excess properties check
function showDetailPerson(data) {
    console.log(`ชื่อ ${data.name} , อายุ ${data.age}`);
}
showDetailPerson({ name: "OWEN Krang", age: 30, });
let emp1 = { id: 1, name: "PAM", salary: 4999, phone: "0929484950" };
console.log(emp1);
//Can re-edit emp1
emp1.salary = 5999;
console.log(emp1);
//Array
const fruit = [];
fruit.push("Mango");
fruit.push("Coconut");
console.log(fruit);
//Loop array
//for each
fruit.forEach(e => {
    console.log(e);
});
//for of
for (let i of fruit) {
    console.log(i);
}
//function overloading
function findSum(a, b) {
    return (parseInt(a) + parseInt(b)).toString();
}
console.log(findSum("100", "200"));
function sayHi(name) {
    if (!name) {
        return `Nuddanai Klaiklin`;
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw console.error("Wrong data");
}
console.log(sayHi());
//spread operator
const section = ["บัญชี", "โปรแกรมเมอร์"];
const section2 = ["ครู", "วิศวะ"];
section.push(...section2); ///
console.log(section);
//Rest Parameter
const restPara = (...numbers) => {
    // reduce lib is contain (previousResult , currentValue)
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(restPara(100, 200, 300));
//Destructuring
//Ex1
const colors = ["Red", "Blue", "Green"];
const [redhot, cyan, lemon] = colors;
console.log(redhot);
//Ex2
const school = {
    teacher: "Alex",
    age: 29
};
const { teacher, age } = school;
console.log(teacher);
