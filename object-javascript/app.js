const student = {
  name: "Khoi",
  age: 27,
  male: true,
  "last-name": "Tran",
  hi: function () {
    console.log("Hello moi nguoi");
  },
};

// 2 cách truy xuất giá trị của object
// 2.1 Dot notation

console.log(student.age);

// 2.2 bracket notation
console.log(student["last-name"]);

// Thay đổi giá trị của object

student.name = "Nam";
console.log(student);
// isDeveloper
student.isDeveloper = true;
console.log(student);
// is-developer
student["is-developer"] = false;
console.log(student);
// Thêm một method mới vào object
student.hello = function () {
  console.log("Chào mọi người");
};

// Cách xóa giá trị của object
delete student["last-name"];
delete student["is-developer"];

// For-in trong object

for (let key in student) {
  if (key === "name") {
    console.log("Hello World");
  }
  console.log(`${key} : ${student[key]}`);
}
