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
    var msg2 = "Hello anh Khoi"; // nếu đặt biến = var thì sẽ auto thành global scope
    // -> dùng var sẽ bị hoisting, đưa code lên trên cùng
}
alert(msg2);

// Lexical Scope -> định nghĩa scope của biến đó bởi vị trí của biến đó trong file
let aNewName = "Tran Dang Khoi"