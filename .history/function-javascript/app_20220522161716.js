function sum(a = 0, b = 0) { // a và b là tham số (parameters)
    const total = a + b;
    return total;
}

// Tham số là function
// function name(parameter) 

console.log(sum(1, 2)); // 1 và 2 là đối số (arguments)
// Lưu function vào một biến rồi gọi sau
function add(a = 0, b = 0) {
    return a + b;
}