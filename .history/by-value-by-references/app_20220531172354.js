// By value -> giá trị thực sự đương lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);
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
const arrStr1 = JSON.stringify(arr2);