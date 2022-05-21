const myName = "Khoi";
// console.log(myName);
// console.log(typeof myName);
const introduction = `Hello my name is ${myName}`;
console.log(introduction);
// .length

console.log(introduction.length);
// Hello my name is Khoi -> 0 đến 20 -> length: 21
// index là vị trí của từng kí tự trong chuỗi (bao gồm cả khoảng trắng)
const myStr = "Frontend Developer";
console.log(myStr.split(" "));
console.log(myStr.split("/"));
console.log(myStr.startsWith("Frontend"));
console.log(myStr.endsWith("Developer"));
console.log(myStr.includes("Front"));
console.log(myStr.indexOf("D"));
console.log(myStr.lastIndexOf("e"));
console.log(myStr.replace("Developer", "Designer"));