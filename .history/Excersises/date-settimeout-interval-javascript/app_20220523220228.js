// Nhập vào năm sinh của mình
const birthYear = prompt("Năm sinh của bạn là gì? ");
let warnMsg = "Vui lòng nhập vào số năm sinh nhỏ hơn số năm hiện tại"
const date = new Date();
// Lấy năm hiện tại
const thisYear = date.getFullYear();
console.log(thisYear); // log ra để check
const yourAge = thisYear - birthYear;
birthYear > thisYear ?
    alert(yourAge);