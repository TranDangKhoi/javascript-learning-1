// Closure

function greetings() { // parent function
    let msg = "Hi!";

    function sayHi() { // child function
        console.log(msg);
    }
}