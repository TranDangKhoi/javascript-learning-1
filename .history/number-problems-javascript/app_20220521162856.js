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
console.log(String(4.5));
console.log(String(null));
console.log(String(false));