// Nhập vào năm sinh của mình
const birthYear = prompt("Năm sinh của bạn là gì? ");

function dateValidation = (yourBirthYear) => {
    if (typeof yourBirthYear !== number) {
        return 0;
    } else {
        return yourBirthYear;
    }
}

dateValidation(birthYear);

let warnMsg = "Vui lòng nhập vào số năm sinh nhỏ hơn số năm hiện tại";
const date = new Date();
// Lấy năm hiện tại
const thisYear = date.getFullYear();
console.log(thisYear); // log ra để check
const yourAge = thisYear - birthYear;
birthYear > thisYear ? alert(warnMsg) : alert("Tuổi của bạn là: " + yourAge);