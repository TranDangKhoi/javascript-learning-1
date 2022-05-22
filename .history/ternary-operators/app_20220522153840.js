//Ternary Operators (cách viết if else rút gọn)
const yourAge = 15;
let msg = "";
if (yourAge >= 18) {
    msg = "You are an adult";
} else if (yourAge <= 10) {
    msg = "Your are still a child";
}
// Condition ? do something : do something else

let msg2 = yourAge >= 18 ? msg = "You're an adult" : msg = "Your are still a child"
console.log(msg2);
let msg3 = yourAge >= 18 ? "You're an adult" : yourAge <= 10 ? "You're still a child" : "You're a young boy"
console.log(msg3);