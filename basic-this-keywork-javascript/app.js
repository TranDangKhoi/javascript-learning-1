// this keyword -> sẽ đề cập tới object gần nhất
const student = {
  name: "Khoi",
  age: 19,
  male: true,
  hi: function () {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  },
};

student.hi();
