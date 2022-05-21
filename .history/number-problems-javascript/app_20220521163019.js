// undefined
let a;
console.log(a); // -> undefined
let b;
b = 100;
console.log(b);
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
// String nếu cho giá trị gì vào cũng sẽ biến thành string
// VD:
console.log(String(4.5)); // output: 4.5 nhưng mà duoiws dạng string
console.log(String(null)); // output: null nhưng mà duoiws dạng string
console.log(String(false)); // output: false nhưng mà duoiws dạng string
console.log(String(true)); // output: same
// Boolean(value) -> trả về true hoặc false
// Cái này đã tìm hiểu qua nhiều trong các ngôn ngữ lập trình khác nên sẽ tạm thời bỏ qua