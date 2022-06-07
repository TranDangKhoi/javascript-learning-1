// 1. Cho 1 mảng gồm nhiều giá trị. Viết chương trình loại bỏ các giá trị falsy
// ra khỏi mảng, chỉ giữa lại giá trị truthy. Gợi ý giá trị false là 0 null undefined false "" NaN
// 2. Cho 1 mảng phức tạp [[1,2,3,[false,null]], [1,5,6, ["javascript"]], [888,666, [90]]]. Và kết quả mong muốn là
// [1,2,3,false,null,1,5,6,"javascript",888,666,90]

// 1
const array = [
  1,
  1000,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];
// new Boolean -> Boolean la object
// Boolean

const filter = array.filter((item) => Boolean(item));
console.log(filter);

// 2.

const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];

const result = complexArray.flat(2);
console.log(result);

// 3.-+ Đảo ngược số nguyên, Ví du 1234 -> 4321, -567 -> -765
// Biến dạng num thành dạng String -> split("") ra để nó tách thành mảng các số
// Từ đó 567 -> [5,6,7]
// Sau đó chúng ta sẽ đảo ngược lại mảng thành [7,6,5] = cách dùng reverse() cho mảng
// Cuối cùng chúng ta join lại các phần tử trong mảng vào nhau = cách dùng join("")
// Nhìn thì có vẻ chúng ta đã thành công, nhưng nếu đây là một số âm thì chương trình vẫn sẽ lỗi
// VD: -567 -> 765 -> sẽ bị mất dấu âm
// -> Chúng ta sẽ dùng một method của object Math đó chính là Math.sign(num) -> Nếu số đó là số âm thì sẽ nhân số num cho -1 còn nếu là số dương thì nhân cho 1

const reversedNum = (num) =>
  parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);
console.log(reversedNum(-567));

// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới
// số nguyên đó rồi kiểm tra nếu số chia hết cho 2 thì in ra chữ "Fizz" nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"

const fizzBuzz = (num) => {
  if (num % 2 === 0 && num % 3 === 0) {
    return "fizzBuzz";
  }
  if (num % 2 === 0) {
    return "fizz";
  }
  if (num % 3 === 0) {
    return "Buzz";
  }
};

console.log(fizzBuzz(6));
