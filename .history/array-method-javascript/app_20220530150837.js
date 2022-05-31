const randomNumbers = [1, 1000, 5, 9, 99];
// array.sort(): Sắp xếp các phần tử theo chuẩn unicode-16
console.log(randomNumbers.sort());

// sort(function(a,b))
// function(callback) -> callback là 1 parameter nằm trong function

const randomNumbers2 = randomNumbers.sort(function (a, b) {
    if (a > b) {
        return 1; // sắp xếp theo tăng dần
    }
    if (a < b) {
        return -1; // sắp xếp theo giảm dần
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
// Nếu không tìm thấy thì sẽ trả về kết quả là -1
const findMyNumbersIndex2 = myNumbers.findIndex((element) => element < 0);
console.log(findMyNumbersIndex);
// Nếu không tìm thấy thì sẽ trả về kết quả là -1
console.log(findMyNumbersIndex2);


// Sort bổ sung
// const randomNumbers = [1, 1000, 5, 9, 99];

const randomNumbers4 = randomNumbers.sort((a, b) => a > b ? -1 : 1);
console.log(randomNumbers4);

console.log("----Array.map()-----");
// duyệt qua từng phần tử trong mảng và trả ra một mảng mới
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các số (giá trị) trong mảng cũ nhân 2
const listNumberDouble = listNumber.map(function (value, index, array) {
    return value * 2;
})
// [2, 4, 6, 8, 10]
console.log(listNumberDouble);

console.log("----Array.forEach()----");
const listNumberTriple = listNumber.forEach((value, index, array) => {
    return value * 3;
})

// Hãy cho biết sự khác nhau giữa forEach và map
// forEach thì sẽ không return được, map thì có
// map sẽ trả ra một mảng mới dựa vào mảng ban đầu, còn forEach thì không
// forEach chỉ dùng trong DOM -> Có cách nào để dùng không ? -> trả lời không dùng

console.log("---Array.filter()----");
// filter là dùng để sàng lọc các phần tử trong mảng thỏa điều kiện nào đó
// .filter(callback(value,index,array))
// const listNumber = [1, 2, 3, 4, 5];
const numberBiggerThanThree = listNumber.filter((item, i, a) => item > 3
})

console.log(numberBiggerThanThree);