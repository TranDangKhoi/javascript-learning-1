// By value -> giá trị thực sự đương lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true
// By references // -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // Ủa tại sao lại ra false ?? -> vì khác vị trí trong vùng bộ nhớ -> nói tới vùng bộ nhớ
// JSON
// JSON.stringify(value) -> convert giá trị sang dưới dạng json
// JSON.parse

console.log(JSON.parse("[1,2,3]"));
console.log(JSON.stringify([1, 2, 3]));

const arrStr1 = JSON.stringify(arr1);
const arrStr2 = JSON.stringify(arr2);
console.log(arrStr1 === arrStr2); // true

// clone 2 mảng

const students = ["An", "Khoi", "Minh", "Nam", "Viet"];
// students.pop(); // Xóa phần tử cuối cùng của mảng
console.log(students);

// Cách 1: Sử dụng slice()
const slicedStudents = students.slice();
console.log(slicedStudents);
// 2. spread operator [... array]
const spreadStudents = [...students];
console.log(spreadStudents);

// 2 cách để gộp mảng lại
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]
// concat
// 1. array.concat
const array1 = [1, 2];
const array2 = [3, 4];