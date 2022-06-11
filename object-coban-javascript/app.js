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

// Ôn tập về object

const employee = {
  name: "Khoi",
  age: 19,
  skin: "Black",
  isMale: true,
  level: "Intern",
  talk: function () {
    console.log("Hello guys");
  },
};

console.log(employee.name);
console.log(employee["name"]);
// Add a new key / property to the object
// Simply just write objectName[newKey] or objectName.newKey = something
employee["is-male"] = true;
console.log(employee);
// Delete keys in object
delete employee["is-male"];
// Change key's value in object
employee.isMale = false;
console.log(employee.isMale);

// For-in loop to print all keys and key's value
// NOTE: For-in loop không được sử dụng cho Array vì tính chất của các index trong array rất quan trọng

for (let prop in employee) {
  console.log(`${prop} : ${employee[prop]}`);
}
