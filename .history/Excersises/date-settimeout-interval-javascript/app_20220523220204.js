// Nhập vào năm sinh của mình
const birthYear = prompt("Năm sinh của bạn là gì? ");
const warnMsg
const date = new Date();
// Lấy năm hiện tại
const thisYear = date.getFullYear();
console.log(thisYear); // log ra để check
const yourAge = thisYear - birthYear;
birthYear > thisYear ?
    alert(yourAge);