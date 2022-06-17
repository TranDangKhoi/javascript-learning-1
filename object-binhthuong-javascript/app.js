const student = {
  name: "Khoi",
  age: 19,
  isMale: true,
  sayHi: function () {
    console.log("Xin chào mọi người");
  },
};
// các phương thức có sẵn trong object
// Object.keys() -> trả về một mảng chứa tất cả các keys của object
const keys = Object.keys(student);
console.log(keys);
console.log(keys.length);

// -> Mục đích học cái này là để thao tác với object
// Object values -> trả về một mảng chứa tất cả các giá trị của object
const values = Object.values(student);
console.log(values);

// Object.entries (object) -> Trả về một mảng nested
// (mảng trong mảng) -> VD: [["name","Khoi"], ["age",19]]
const entries = Object.entries(student);
console.log(entries);

// Object.assign(firstObject, secondObject) -> Sao chép dữ liệu từ object này sang object khác
const a = {
  firstName: "Tran",
  month: 6,
};

const b = {
  lastName: "Khoi",
  year: 2003,
};

const c = Object.assign(a, b);
console.log(c);

const d = { ...a, ...b };
console.log(d);

// Object.freeze(object) -> Đóng băng object, không cho chỉnh sửa key và value của object
const car = {
  brand: "BMW",
};

const newCar = Object.freeze(car);

newCar.brand = "Audi";
console.log(newCar);
// Object.seal(object) -> Cho phép chỉnh sửa key và value nhưng không đc thêm key và value mới

const user = {
  userName: "Toilatofu",
};

const newUser = Object.seal(user);
newUser.userName = "Tran Dang Khoi";
newUser.age = 19; // Thêm key age mới vào
console.log(newUser);
