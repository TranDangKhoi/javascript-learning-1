// 1. Viết function so sánh hai số a và b tìm ra số lớn hơn
// Bài tự làm
function compareNumber(a = 0, b = 0) {
    let result = a > b ? "a is bigger than b" : a === b ? "a is equal to b" : "a is smaller than b";
    return result;
}

console.log(compareNumber(3, 2));

// Bài chữa:

function compareNumber2(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Enter a valid number";
    }
    return `The bigger number between ${a} and ${b} is ${Math.max(a, b)}`;
}

console.log(compareNumber2("1000", 100));

// Bài 2: In hoa chữ cái đầu tiên trong 1 chữ
function capitalize(word = "") {
    if (word.length === 0) {
        return null;
    }
    // convert to lower case first
    let newWord = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    console.log(newWord);
}

capitalize("kHOI")