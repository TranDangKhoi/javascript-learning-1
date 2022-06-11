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
