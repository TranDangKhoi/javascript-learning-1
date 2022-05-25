// Nhập vào năm sinh của mình
const birthYear = Number(prompt("Năm sinh của bạn là gì? "));

console.log(typeof birthYear);
console.log(dateValidation(birthYear));


let warnMsg = "Vui lòng nhập vào số năm sinh nhỏ hơn số năm hiện tại";
const date = new Date();
// Lấy năm hiện tại
const currentYear = date.getFullYear();
console.log(currentYear); // log ra để check
const yourAge = currentYear - birthYear;
birthYear > currentYear ? alert(warnMsg) : alert("Tuổi của bạn là: " + yourAge);