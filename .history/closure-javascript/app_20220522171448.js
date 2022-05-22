// Closure

// function greetings() { // parent function -> outer function
//     let msg = "Hi!";

//     function sayHi() { // child function -> inner function
//         console.log(msg);
//     }
//     return sayHi;
// }

// const hello = greetings();
// hello();

// function greetings(msg) {
//     return function hiYourName(yourName) {
//         console.log(`${msg} ${yourName}`);
//     }
// }

// let hello = greetings("Wecome to my website");
// hello("Khoi");

function welcomeMsg(msg) {
    return function welcomeName(yourName) {
        console.log(`${msg} ${yourName}`)
    }
}