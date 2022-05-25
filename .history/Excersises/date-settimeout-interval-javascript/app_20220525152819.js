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

// function getAge(birthYear = 0) {
//     const date = new Date();
//     const currentYear = date.getFullYear();
//     const yourAge = currentYear - birthYear; // lấy số năm hiện tại trừ đi năm sinh để ra số tuổi
//     if (typeof birthYear !== "number") {
//         return null;
//     } else {
//         return yourAge;
//     }
// }

// console.log(getAge(2003));

// Bài 2: Viết chương trình đếm ngược thời gian, làm bài thi 30p hết giờ thì thông báo đã hết giờ


function countDown(minutes = 1) {
    let seconds = minutes * 60; // 60s
    let counter = 0;
    const timer = setInterval(function () {
        counter++;
        console.log(counter);
        if (counter === seconds) {
            clearInterval(timer);
            alert("Your time has ended");
        }
    }, 1000);
}

// countDown();

// Bài 3: viết chương trình time since last online
function timeSince(date) {
    // currentTime - time
    const now = new Date();
    const yourDate = new Date(date);
    const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
    let timer = seconds / 31536000;
    if (timer > 1) {
        console.log(`${timer} năm trước`);
    }

    timer = seconds / 2678400;
    if (timer > 1) {
        console.log(`${timer} tháng trước`);
    }

    timer = seconds / 604800;
    if (timer > 1) {
        console.log(`${timer} tuần trước`);
    }

    timer = seconds / 86400;
    if (timer > 1) {
        console.log(`${timer} ngày trước`);
    }

    timer = seconds / 3600;
    if (timer > 1) {
        console.log(`${timer} giờ trước`);
    }

    console.log(seconds);
}
// 3 phút trước, 3 ngày trước, 2 tháng trước, 30 giây trước, 1 năm trước
// 1 năm = 365 ngày * 24h * 60p * 60s -> 365 * 24 * 60 * 60 = 31536000;
// 1 tháng = 31 ngày * 24h * 60p * 60s -> 30 * 24 * 60 * 60 = 2678400;
// 1 tuần = 1 tuần * 24h * 60p * 60s -> 7 * 24 * 60 * 60 = 604800;
// 1 ngày = 1 ngày * 24h * 60p * 60s -> 1 * 24 * 60 * 60 = 86400;
// 1 giờ = 1 * 60 * 60 = 3600;
// 1 phút = 1 * 60 = 60;
timeSince("Wed May 25 2022 14:30:11 GMT+0700 (Indochina Time)");