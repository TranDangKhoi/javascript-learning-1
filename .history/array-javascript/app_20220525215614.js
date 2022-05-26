// Array <-> Mảng 
// Array literal
const students1 = [];
// Array constructor
const students = new Array();

const carsName = ["Volvo", "BMW", "Audi", "Huyndai", "Roll Royce", "BMW"];
// Phương thức hay dùng của mảng
// array.length (in ra độ dài của mảng)
console.log(carsName.length);
// array.reverse() (đảo ngược giá trị bên trong mảng)
console.log(carsName.reverse());
console.log(carsName.reverse());
// array.join() (nối các phần tử trong mảnh thành chuỗi)
console.log(carsName.join());
console.log(carsName.join(" | "));
console.log(carsName.join(" "));
// array.includes() (như tên của method, nếu chứa phần tử có nội dung như bên trong "" thì sẽ trả về giá trị boolean true)
// indexOf -> trả ra vị trí đầu tiên của phần tử mà javascript tìm thấy trong mảng đó
console.log(carsName.indexOf("Volvo"));
console.log(carsName.indexOf("BMW")); // trả về 1 mặc dù có 2 phần tử BMW
// có indexOf thì sẽ có lastIndexOf
// Thêm phần tử vào cuối mảng = push();
console.log(carsName.push("Mercedes"));
console.log(carsName);
// Thêm phần tử vào đầu mảng = unshift();
console.log(carsName.unshift("Porsche"));
console.log(carsName);