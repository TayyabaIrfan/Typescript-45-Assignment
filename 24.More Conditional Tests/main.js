"use strict";
// Tests for equality and inequality with string
let mango = "Mango";
console.log("\nIs Mango equals to Mango?");
console.log(mango == "Mango");
console.log("\nIs Mango not Equals to Mango");
console.log(mango != "Mango");
//Test for using lowercase function
let uppercase = "MANGO";
console.log("\nIs MANGO equals to mango after converting to lowercase");
console.log(uppercase.toLowerCase() == "mango");
console.log("\nIs MANGO not equals to mango after converting to lowercase");
console.log(uppercase.toLowerCase() != "mango");
// Numerical Tests
let five = 5;
let ten = 10;
// equality and inequality
console.log("\nIs Five equals to Ten");
console.log(five == ten);
console.log("\nIs Five not equals to Ten");
console.log(five !== ten);
// greater and less than condition
console.log("\nIs Five smallet to Ten");
console.log(five < ten);
console.log("\nIs Five greater to Ten");
console.log(five > 10);
console.log("\nIs Five greater or equals to Ten");
console.log(5 >= 10);
//lesser or equals to / greater and equals to
console.log("\nIs Five lesser or equals to Ten");
console.log(5 <= 10);
console.log("\nIs Five greater or equals to Five");
console.log(five <= five);
//using 'And' operations
console.log("\nIs Five not greater to Ten and Five is less than Ten");
console.log(five != ten && five < ten);
console.log("\nIs Five greater to Ten and Five is less than Ten");
console.log(five > ten && five < ten);
//Using OR operator
console.log("\nIs Five not greater to Ten OR Five is less than Ten");
console.log(five > ten || five < ten);
console.log("\nIs Five not lesser to Ten and Five is equals to Ten");
console.log(five < 10 || five === ten);
console.log("\nIs Five greater to Ten and Five is equals to Ten");
console.log(five > ten || five == ten);
//Items is in Array
let color = ["Yellow", "Orange", "Green"];
console.log("\nIs Yellow includes in my color array");
console.log(color.includes("Yellow"));
console.log("\nIs Grey includes in my color array");
console.log(color.includes("Grey"));
