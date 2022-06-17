const student = {
  name: "Khoi",
  age: 19,
  isMale: true,
  hi: function () {
    console.log(`Hi! My name is ${this.name}`);
  },
  fullName: {
    name: "Tran Dang Khoi",
  },
};

// console.log(student.fullName); // undefined
// console.log(student.fullName.name); // undefined.name -> Cannot read property "name" of undefined

if (student.fullName) {
  if (student.fullName.name) {
    console.log(student.fullName.name);
  }
}

// -> CÁCH NÀY QUÁ DÀI

// optional chainng

// object.firstKey?.secondKey?

// Destructuring Object
console.log(student.fullName?.name);

const name = student.name;
const age = student.age;
const male = student.isMale;
