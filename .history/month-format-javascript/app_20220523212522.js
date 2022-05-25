// format 14/5/2021 thanh 14/05/2021
const now = new Date();
console.log(now.toLocaleDateString("vi-VI"));
const myMonth = now.getMonth() + 1;
const myDate = now.getDate();
const prefixMonth = myMonth <= 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
console.log(`${myDate}/${prefixMonth}/${now.getFullYear()}`);

// Bài chữa 

const now = new Date();
console.log(now.toLocaleDateString("vi-VI"));
const myMonth = now.getMonth() + 1;
const myDate = now.getDate();
const prefixMonth = myMonth <= 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
console.log(`${myDate}/${prefixMonth}/${now.getFullYear()}`);