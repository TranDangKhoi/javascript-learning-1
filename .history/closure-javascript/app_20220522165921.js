// Closure

function greetings() { // parent function -> outer function
    let msg = "Hi!";

    function sayHi() { // child function -> inner function
        console.log(msg);
    }
    return sayHi;
}

greetings();