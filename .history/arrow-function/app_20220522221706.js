// Arrow function: Anonymous function
// ECMAScript
// Normal function : Anonymous function
const square = function (x) {
    return x * x;
}

square(5); // 25
// Arrow function: Anonymous function

const square2 = (x) => {
    return x * x;
}
// rút gọn khi return
const square3 = () => 1000;
console.log(square3()); // trả về 1000
// VD2:
const square4 = (x) => x * x;
console.log(square4(3)); // trả về 9
/*
const square = () => {
    handle code and return
}
*/