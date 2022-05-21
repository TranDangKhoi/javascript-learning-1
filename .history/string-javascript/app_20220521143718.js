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
console.log(myStr.repeat(5));
// slice
// "Frontend Developer"
// slice(start,end)
console.log(myStr.slice(0, 8)); // Frontend
console.log(myStr.slice(-3)); //per -> số âm thì ngược lại cái String
console.log(myStr.trim());
console.log(myStr.trimStart()); // remove space left
console.log(myStr.trimEnd()); // remove space right
// substr -> Lấy ra 1 phần của chuỗi (String)
// substr (index, length) -> index: vị trí, length: độ dài kí tự muốn lấy
console.log(myStr.substr(1, 5));
// substring -> Lấy ra các kí tự của chuỗi (String)
console.log(myStr.substring(1, 5));