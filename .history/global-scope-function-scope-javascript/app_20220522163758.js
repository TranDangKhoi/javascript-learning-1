//Scope
//Global Scope and Function Scope
let myName = "Khoi"; // Global Scope (Biến toàn cục do nằm ngoài function)

function logYourName() {
    let myName2 = "Tofu"; // Function Scope
}

console.log(myName); // Log được ra console do đây là global scope

// Block Scope
if (2 > 1) {
    // let msg = "Hello Khoi"; // Block Scope
    var msg2 = "Hello anh Khoi";
    alert(msg2);
}