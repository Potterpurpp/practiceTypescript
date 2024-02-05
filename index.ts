console.log("Hello TypeScript")

class Human{
    name:String = ""
    age:Number = 0

    sayHello(){
        return "Hello! My name is "+this.name+" age "+ this.age
    }
}
const user1 : any = new Human()
user1.name = "Potter"
user1.age = 14
user1.sayHello()