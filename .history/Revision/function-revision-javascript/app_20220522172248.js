// 1. Viết function so sánh hai số a và b tìm ra số lớn hơn
// Bài tự làm
function compareNumber(a = 0, b = 0) {
    let result = a > b ? "a is bigger than b" : "a is smaller than b";
    return result;
}

console.log(compareNumber());

// Bài chữa:

function compareNumber2(a = 0, b = 0) {
    return `The bigger number between ${a} and ${b} is ${Math.max(a, b)}`;
}

console.log(compareNumber2(10, 34));