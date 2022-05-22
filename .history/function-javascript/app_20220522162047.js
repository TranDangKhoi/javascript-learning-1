function sum(a = 0, b = 0) { // a và b là tham số (parameters)
    const total = a + b;
    return total;
}

// Tham số là function
// function name(parameter) 

console.log(sum(1, 2)); // 1 và 2 là đối số (arguments)
// Lưu function vào một biến rồi gọi sau
function add(a = 0, b = 0) {
    console.log(a + b);
    return a + b;
}
// add(500,1000);
const sum2 = add; // gán function cho biến sum2
console.log(sum2(300, 400));