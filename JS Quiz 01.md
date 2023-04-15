## Câu hỏi 1: Đáp án là gì?

```js
console.log(num);
var num = 1;
```

A. undefined

B. null

C. 1

D. ReferenceError: num is not defined

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

### Đáp án là **A**

Vì tác động bởi tính chất của Hoisting trong JS nên bản chất đoạn code kia sẽ có dạng như sau:

```js
var num;
console.log(num);
num = 1;
```

Và theo như đoạn code trên thì num được khai báo rồi nhưng mà chưa được gán giá trị nên giá trị của nó sẽ là `undefined`

</details>

## Câu hỏi 2: Đáp án là gì?

```js
console.log(num);
num = 1;
```

A. 1

B. undefined

C. ReferenceError: num is not defined

D. NaN

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

### Đáp án là **C**

Trong JS, khi ta không sử dụng bất kì kiểu khai báo nào (var, let, const) thì mặc định nó sẽ gán cho kiểu khai báo đó là `let`, đưa vào đoạn code trên thì sẽ có dạng như sau:

```js
console.log(num);
let num = 1;
```

Và bởi vì `let` không có tính chất hoisting giống như `var`, nên JS sẽ hiểu rằng "Mày chưa hề khai báo bất kì biến nào tên num cả", vì vậy kết quả sẽ trả về `ReferenceError: num is not defined`, lỗi này khác với undefined ở chỗ là:

- undefined: là khai báo rồi nhưng mà chưa sử dụng, chưa gán giá trị

- ReferenceError: ... is not defined: là chưa hề khai báo

</details>

## Câu hỏi 3: Đáp án là gì?

```js
var num = 1;

function getMyNumber() {
  console.log(num);
}
```

A. ReferenceError: num is not defined

B. undefined

C. 1

D. null

E. Đáp án khác

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

### Đáp án là **E**

Lí do ra đáp án E thì nhìn kĩ lại 5s, chúng ta chưa hề gọi hàm để thực thi xử lí đoạn code in ra màn hình. Phải invoke function như sau:

```js
var num = 1;

function getMyNumber() {
  console.log(num);
}

// Lúc này mới thực thi function
getMyNumber();
```

</details>

## Câu hỏi 4: Đáp án là gì?

```js
var num = 1;

function getMyNumber() {
  console.log(num);
  var num = 123;
}

getMyNumber();
```

A. ReferenceError: num is not defined

B. undefined

C. 123

D. 1

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

### Đáp án là **B**

Cũng lại là vì tính chất **Hoisting** thôi, hoisting nói khái niệm thì nôm na là đưa code của mình lên trên ĐẦU. Nhưng mà đầu gì thì có thể họ không nói (maybe đầu c\*c if u're asking 😕). Đưa lên đầu tức là đưa lên đầu của **Scope**, ví dụ như sau:

```js
let string = "Aiza";
console.log("hehe");
console.log("haha");

function getNum() {
  console.log(num);
  var num = 1;
}
```

Thì lúc này biến num sẽ được đưa lên trên đầu của **Scope**, và scope của nó là bên trong function getNum(), tức là đoạn code trên thực chất sẽ là như sau:

```js
let string = "Aiza";
console.log("hehe");
console.log("haha");

function getNum() {
  var num;
  console.log(num);
  num = 1;
}
```

CHỨ KHÔNG PHẢI LÀ:

```js
var num;
let string = "Aiza";
console.log("hehe");
console.log("haha");

function getNum() {
  console.log(num);
  num = 1;
}
```

</details>

## Ô KÊ, THẾ LÀ XONG 90% PHẦN HOISTING

## Câu hỏi 5: Đáp án là gì?

```js
const names = [
  "John Wick Binh Duong",
  "Sad thu da tinh",
  "Nguyen Thu Huong",
  "Co gai trong ban truyen thong",
];

console.log(names[1]);
// và
console.log(names[5]);
```

A. John Wick Binh Duong và undefined

B. John Wick Binh Duong và null

C. Sad thu da tinh và undefined

D. Sad thu da tinh và null

E. Đáp án khác

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

### Đáp án là **C**

Thực sự là cần giải thích sao ...

Trong mảng index sẽ bắt đầu từ con số 0, và Javascript sẽ dùng index để làm key, vì vậy:

```js
const names = [
  "John Wick Binh Duong", // 0
  "Sad thu da tinh", // 1
  "Nguyen Thu Huong", // 2
  "Co gai trong ban truyen thong", // 3
];

console.log(names[1]); // Output: Sad thu da tinh
console.log(names[4]); // Output: undefined
```

</details>

## Câu hỏi 6: Đáp án là gì?

```js
let student1 = {
  name: "Khoi",
  age: 20,
  isASophomore: true,
};

let student2 = {
  name: "Osad",
  age: 21,
  isASophomore: false,
};

student2 = student1;

console.log(student2.name);
// và
console.log(student1.name);
```

A. Khoi và Khoi

B. Osad và Osad

C. Đáp án khác

<details>
  <summary>
  <strong>Đáp án & Giải thích</strong>
  </summary>

### Đáp án là **A**

Thực sự là cần giải thích sao ...

Khi ta sử dụng toán tử = để gán giá trị của `student1` cho `student2`.

Thì `student2` sẽ ngay lập tức bị thay đổi địa chỉ bộ nhớ sang địa chỉ bộ nhớ của `student1`, và có cho mình toàn bộ giá trị mà thằng `student1` có. và đương nhiên cả vùng bộ nhớ của chúng nó cũng là một luôn

Hiểu nôm na là Khôi sống ở Kim Ngưu, Nam sống ở Núi Trúc, tự dưng thằng Nam đấm thằng Khôi chết rồi "phẫu thuật thẩm mĩ" thay thế chỗ của nó, thì danh tính của Nam sẽ biến thành của Khôi luôn, và địa chỉ nhà cũng ở Kim Ngưu luôn 🥰

```js
console.log(anotherStudent === student);
// Output: true
```

</details>
