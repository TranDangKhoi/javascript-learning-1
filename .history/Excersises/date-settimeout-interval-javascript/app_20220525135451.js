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

function getAge(birthYear = 0) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const yourAge = currentYear - birthYear; // lấy số năm hiện tại trừ đi năm sinh để ra số tuổi
    if (typeof birthYear !== "number") {
        return null;
    } else {
        return yourAge;
    }
}

console.log(getAge(2003));