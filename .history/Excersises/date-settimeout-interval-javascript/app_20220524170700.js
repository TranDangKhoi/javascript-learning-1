// Nhập vào năm sinh của mình
// const birthYear = Number(prompt("Năm sinh của bạn là gì? "));

// function dateValidation(yourBirthYear = 0) {
//     if (typeof yourBirthYear !== "number") {
//         return "Enter a valid birth year";
//     }
//     return yourBirthYear;

// }
// console.log(typeof birthYear);
// console.log(dateValidation(birthYear));


// let warnMsg = "Vui lòng nhập vào số năm sinh nhỏ hơn số năm hiện tại";
// const date = new Date();
// // Lấy năm hiện tại
// const currentYear = date.getFullYear();
// console.log(currentYear); // log ra để check
// const yourAge = currentYear - birthYear; // lấy năm hiện tại - đi năm bạn sinh ra
// birthYear > currentYear ? alert(warnMsg) : alert(yourBirthYear);

function getAge(birthYear) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const yourAge = currentYear - birthYear;
    if (typeof birthYear !== "number") {
        return 0;
    } else {
        return yourAge;
    }
}

console.log(getAge(2004));