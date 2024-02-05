//Basic
let firstName : string = "Potter"
let isWorking : boolean = false
console.log(`ชื่อ = ${firstName}`)

//any & unknown   มี กับ ไม่มี การตรวจสอบชนิดข้อมูล
function formatNumber(num:number){
    return num.toFixed(2) // toFixed ใช้แค่ type number เท่าระเร
}
let money: any ="20.1213"
money =  90.124 // money = "39.21313"     //แตกเลยเพราะ toFixed()
console.log(formatNumber(money))

let money2: unknown = "309.212"
if(typeof money2 === "number"){
    console.log(formatNumber(money2))
}


// Type Assertions
let username: unknown
username = "Jkrowling";
console.log((username as string).toUpperCase()); // วิธีแรก
(<string>username).toLowerCase() // วิธีืี่สอง


//Switch Case
let service: number = 1;
let resultBank: String;
switch (service) {
    case 1:
        resultBank="Check money in account"
        break;
    case 2:
        resultBank="Deposit"
        break;
    default:
        resultBank="Failed to access"
        break;
}
console.log(`ผลลัพธ์ = ${resultBank}`);


//for loop
let users: string[] = ["Apple","Banana","Chocolate"]
for (let count = 0; count < 3; count++) {
   console.log(count)
}
for(let count = 0; count<users.length; count++){
    console.log(users[count])
}


//function
function checkNumber(num:number): string{
    if(num % 2 === 0){
        return "เลขคู่";
    }else{
        return "เลขคี่";
    }
}
function printWord(kum:string):void{
    console.log(kum)
}
const minus = (a: number , b:number)=>{
    a = 10,
    b=20
    return a+b
}
printWord("Hey Void")

//object 
const person1 = {
    name: "Owen",
    age: 20,
    address: "124"
}
const person2 : {
    name: string,
    age:number
} = {name: "Joji" , age: 30}
showDetailPerson(person1)


//Excess properties check
function showDetailPerson(data: {name:string , age:number} ){
    console.log(`ชื่อ ${data.name} , อายุ ${data.age}`)
}
showDetailPerson({name:"OWEN Krang" , age:30,})


//Type Aliases
//readonly                     //Can't resign variable
type Employee = {
    id: number,
    name:string,
    salary:number,
    readonly phone?:string // Null acception
}
let emp1:Employee = {id:1,name:"PAM",salary:4999,phone:"0929484950"}
console.log(emp1)
//Can re-edit emp1
emp1.salary = 5999
console.log(emp1)


//Array
const fruit: string[] = []
fruit.push("Mango")
fruit.push("Coconut")
console.log(fruit)

//Loop array
//for each
fruit.forEach(e=>{
    console.log(e)
})
//for of
for(let i of fruit){
    console.log(i)
}


//function overloading
function findSum(a:string , b:string) : string {
    return (parseInt(a) + parseInt(b) ).toString();

}
console.log(findSum("100" , "200"))
function sayHi(name?: unknown) : unknown {
    if(!name){
        return `Nuddanai Klaiklin`
    }
    if(typeof name == "string"){
        return `Hello ${name}`
    }
    throw console.error("Wrong data");
}
console.log(sayHi())


//spread operator
const section:string[] = ["บัญชี" , "โปรแกรมเมอร์"]
const section2:string[] = ["ครู", "วิศวะ"]
section.push(...section2)    ///
console.log(section)


//Rest Parameter
const restPara = (...numbers:number[]) =>{
    // reduce lib is contain (previousResult , currentValue)
    return numbers.reduce((result , value)=>{ 
            return result+value
    },0)
}
console.log(restPara(100,200,300))


//Destructuring
//Ex1
const colors:string[] = ["Red","Blue","Green"]
const [redhot, cyan , lemon] = colors
console.log(redhot)
//Ex2
const school = {
    teacher: "Alex",
    age: 29
}
const {teacher , age}  = school
console.log(teacher)


//tuple
// สมาชิกในนั้นมีชนิดข้อมูลต่างกันได้ ตรงข้าม array ที่ต้องเหมือนกัน
// มี index ตายตัว
const status1: [number,string] = [40,"Success"]
console.log(status1)


//Tuple label
type httpStatus = [code: number, status:string]
const notFound : httpStatus = [404 , "Not Found"]
const success  : httpStatus = [200 , "Sucess"]
const forbiden : httpStatus = [403 , "Forbidden"]




