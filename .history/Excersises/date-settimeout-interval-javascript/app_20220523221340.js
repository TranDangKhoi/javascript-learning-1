// Nhập vào năm sinh của mình
const birthYear = prompt("Năm sinh của bạn là gì? ");
const numberBirthYear = Number(birthYear);

function dateValidation(yourBirthYear = 0) {
    if (typeof yourBirthYear !== "number") {
        return 0;
    }
    return yourBirthYear;

}

console.log(dateValidation(numberBirthYear));


let warnMsg = "Vui lòng nhập vào số năm sinh nhỏ hơn số năm hiện tại";
const date = new Date();
// Lấy năm hiện tại
const thisYear = date.getFullYear();
console.log(thisYear); // log ra để check
const yourAge = thisYear - birthYear;
birthYear > thisYear ? alert(warnMsg) : alert("Tuổi của bạn là: " + yourAge);