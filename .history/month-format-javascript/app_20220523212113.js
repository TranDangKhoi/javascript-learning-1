// format 14/5/2021 thanh 14/05/2021
const now = new Date();
console.log(now.toLocaleDateString("vi-VI"));
const myMonth = now.getMonth() + 1;
const myDate = now.getDate();

console.log(`${myDate}/0${myMonth}/${now.getFullYear()}`);