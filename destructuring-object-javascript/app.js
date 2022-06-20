// Destructuring Object

const { a, b, c } = { a: 1, b: 2, c: () => 3 };
console.log(a, b, c); // 1, 2, () => 3

const student = {
  name: "Khoi",
  age: 19,
  isMale: true,
  isDeveloper: true,
};

const { name, age, isMale, ...rest } = student;
console.log(name, age, isMale, rest);

function whatYourInfo(name, age, isMale) {
  console.log(name, age, isMale);
}

whatYourInfo("Tofu", 20, true);
// Nhưng mà bây giờ giả dụ chúng ta quên mất thứ tự của parameter thì làm sao?
// Vậy để phòng trường hợp ta có thể quên mất thì ta phải viết function như sau:

// Nếu ta làm thế này thì sẽ dễ dàng lấy ra được giá trị của object
// function whatYourInfo2(obj) {
//   console.log(obj.name, obj.age, obj.isMale);
// }
// const newStudent = {
//   name: "Nam",
//   age: 29,
//   isMale: true,
// };

// whatYourInfo2(newStudent);
// Vậy nên ta sẽ sử dung Object Destructuring Parameter nếu không nhớ thứ tự của tham số truyền vào

function whatYourInfo2({ name, age, isMale }) {
  console.log(name, age, isMale);
}

whatYourInfo2({
  age: 29,
  name: "Nam",
  isMale: true,
});
// Bất kể tham số truyền bên trong viết theo thứ tự nào thì ta vẫn
// có thể truyền vào bình thường mà không cần nhớ thứ tự
