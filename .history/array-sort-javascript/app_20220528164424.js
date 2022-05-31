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

// array.find() -> trả về phần tử tìm thấy đầu tiên trong mảng, thỏa mãn một điều kiện nào đó

const myNumbers = [1, 6, 70, 90, 09];
// Tìm phần tử đầu tiên trong mảng lớn hơn 10
const findMyNumbers = myNumbers.find((element) => element > 10); // nếu không tìm thấy thì nó sẽ trả ra kết quả là undefined
console.log(findMyNumbers);

// array.findIndex() -> trả về vị trí index tìm thấy đầu tiên trong mảng
const findMyNumbersIndex = myNumbers.findIndex((element) => element < 10);
console.log(findMyNumbersIndex);