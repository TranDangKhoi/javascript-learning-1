// 1. Viết function so sánh hai số a và b tìm ra số lớn hơn
// Bài tự làm
function compareNumber(a = 0, b = 0) {
    let result = a > b ? "a is bigger than b" : a === b ? "a is equal to b" : "a is smaller than b";
    return result;
}

// console.log(compareNumber(3, 2));

// Bài chữa:

function compareNumber2(a = 0, b = 0) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Enter a valid number";
    }
    return `The bigger number between ${a} and ${b} is ${Math.max(a, b)}`;
}

// console.log(compareNumber2("1000", 100));

// Bài 2: In hoa chữ cái đầu tiên trong 1 chữ
function capitalize(word = "") {
    if (word.length === 0) {
        return null;
    }
    // convert to lower case first
    let newWord = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    return newWord;
}

// console.log(capitalize("kHOI"));

function logCompareResult(a, b, callback) {
    const compareFn = compareNumber2(a, b);
    callback(compareFn);
}

function printMax(number) {
    console.log("The max number is " + number);
}

console.log(logCompareResult(2, 3, printMax));

function average(a, b) {
    return (a + b) / 2;
}

function callbackAverage(a, b, callback) {
    const averageCal = average(a, b);
    callback(averageCal);
}

function printAvg(result) {
    console.log(`Avg is ${result}`);
}

console.log(callbackAverage(3, 3, printAvg));