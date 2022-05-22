// Closure

function greetings() { // parent function -> outer function
    let msg = "Hi!";

    function sayHi() { // child function
        console.log(msg);
    }
}