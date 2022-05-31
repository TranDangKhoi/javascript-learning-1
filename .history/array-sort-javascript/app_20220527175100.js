const randomNumbers = [1, 1000, 5, 9, 99];
// array.sort(): Sắp xếp các phần tử theo chuẩn unicode-16
console.log(randomNumbers.sort());

// sort(function(a,b))
// function(callback) -> callback là 1 parameter nằm trong function

const randomNumbers2 = randomNumbers.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
})