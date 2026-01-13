"use strict";
// let message: string = "Asslam Alikum"
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(message);
// let name: string = "Muhammad Aurif"
// console.log(name);
// let num: number = 1212
// console.log(num);
// let false: boolean = false
// console.log(false);
// Float Datatype
// let num: number=10
let num = 10.10;
console.log(num);
// data types 
let isLogin = false;
console.log(isLogin);
// It's null
let Language = null;
console.log(Language);
// it's not null, null means vacume
let data = "";
console.log(data);
let Name = 'Muhammad Aurif';
let undefined;
console.log(undefined);
// symbol means it crate unique data type
// Object data types it buil with permitive data types and they hold multiple permitive data types
// Array collection same data types
let nameArray = ['120'];
console.log(nameArray);
let numArray = ['200'];
console.log(numArray);
let Login = true;
console.log(Login);
let name = 'Muhammad Aurif';
// special data types
// any, unknown, void, never
// let Y:any=true
let Y = 201828;
// void means it nothing return
// never mean it never return 
// advance data types, we write multiple values or data types are hold
// Function type defines the type of functions
// =====================
// Primitive Data Types
// =====================
// string
let greeting = "Assalam Alaikum";
console.log(greeting);
// number (integer)
let age = 20;
console.log(age);
// number (float)
let price = 99.99;
console.log(price);
// boolean
let isActive = true;
console.log(isActive);
// null
let userLanguage = null;
console.log(userLanguage);
// empty string (not null)
let emptyValue = "";
console.log(emptyValue);
// undefined
let notAssigned;
console.log(notAssigned);
// =====================
// Array Data Types
// =====================  
let friends = ["Arif", "Usman", "Ali"];
console.log(friends);
// number array
let marks = [80, 75, 90];
console.log(marks);
// boolean array
let statusList = [true, false, true];
console.log(statusList);
// =====================
// Object Data Type
// =====================
let user = {
    name: "Muhammad Aurif",
    age: 22,
    isLogin: true
};
console.log(user);
// =====================
// Special Data Types
// =====================
// any (avoid using too much)
let randomValue = "Hello";
randomValue = 100;
randomValue = true;
console.log(randomValue);
// unknown (safer than any)
let inputValue = "TypeScript";
// type check required
if (typeof inputValue === "string") {
    console.log(inputValue.toUpperCase());
}
// void (function returns nothing)
function showMessage() {
    console.log("This function returns nothing");
}
showMessage();
// never (function never ends)
function throwError() {
    throw new Error("Something went wrong");
}
// throwError()
// =====================
// Advanced Data Types
// =====================
// union type
let id;
id = 101;
id = "A101";
console.log(id);
// tuple
let userInfo = ["Aurif", 22];
console.log(userInfo);
// enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myRole = Role.Admin;
console.log(myRole);
// =====================
// Function with Types
// =====================
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
let person1 = {
    name: "Aurif",
    age: 22
};
console.log(person1);
//# sourceMappingURL=app.js.map