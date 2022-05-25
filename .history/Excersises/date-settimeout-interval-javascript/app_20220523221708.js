// Nhập vào năm sinh của mình
const birthYear = prompt("Năm sinh của bạn là gì? ");

function dateValidation(yourBirthYear = 0) {
    if (typeof yourBirthYear !== "number") {
        return 0;
    }
    return yourBirthYear;

}
console.log(typeof birthYear);
console.log(dateValidation(birthYear));


let warnMsg = "Vui lòng nhập vào số năm sinh nhỏ hơn số năm hiện tại";
const date = new Date();
// Lấy năm hiện tại
const currentYear = date.getFullYear();
console.log(thisYear); // log ra để check
const yourAge = thisYear - birthYear;
birthYear > thisYear ? alert(warnMsg) : alert("Tuổi của bạn là: " + yourAge);