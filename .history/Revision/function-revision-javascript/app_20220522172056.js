// 1. Viết function so sánh hai số a và b tìm ra số lớn hơn
// Bài tự làm
function compareNumber(a, b) {
    let result = a > b ? "a is bigger than b" : "a is smaller than b";
    return result;
}

console.log(compareNumber(3, 2));

// Bài chữa

function compareNumber2(a, b) {
    return Math.max(a, b);
}

console.log(compareNumber2(2, 3 s));