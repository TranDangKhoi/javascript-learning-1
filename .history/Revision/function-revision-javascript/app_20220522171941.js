// 1. Viết function so sánh hai số a và b tìm ra số lớn hơn

function compareNumber(a, b) {
    let result = a > b ? "a is bigger than b" : "a is smaller than b";
    console.log(result);
    return result;
}

console.log(compareNumber(1, 2));