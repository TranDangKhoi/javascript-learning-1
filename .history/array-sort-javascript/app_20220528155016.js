const randomNumbers = [1, 1000, 5, 9, 99];
// array.sort(): Sắp xếp các phần tử theo chuẩn unicode-16
console.log(randomNumbers.sort());

// sort(function(a,b))
// function(callback) -> callback là 1 parameter nằm trong function

const randomNumbers2 = randomNumbers.sort(function (a, b) {
    if (a > b) {
        return 1; // đổi vị trí cho nhau
    }
    if (a < b) {
        return -1; // không đổi vị trí
    }
})

const randomNumbers3 = randomNumbers.sort((a, b) => a > b ? 1 : -1);

console.log(randomNumbers3);
console.log(randomNumbers2);