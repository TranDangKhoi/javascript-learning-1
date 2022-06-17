// Bài tập 1: Clone object đơn giản = Spread Operator
const user = {
  name: "Tofu",
};

// CÁCH LÀM CLONE OBJECT NHƯ NÀY CỰC KÌ NGUY HIỂM
// const newUser = user;
// Thay vào đó ta sẽ dùng spread operator để lấy toàn bộ thông tin trong object sau đó gán vào một object mới khởi tạo
const newUser = { ...user };

// Lúc này name của thằng user cũng sẽ bị đổi theo thằng newUser do tính chất byReferences trong JS
// Bởi vì nó thay đổi cả vùng bộ nhớ của name trong object user thành vùng bộ nhớ của name trong object newUser
newUser.name = "Khoi";

console.log(user);
console.log(newUser);

// Cách sao chép Object nâng cao

const newUser2 = Object.assign({}, user);
console.log(newUser2);

// VD: Bây giờ object phức tạp hơn có nhiều object lồng vào nhau như sau

const student = {
  name: "Khoi",
  school: {
    name: "Aptech",
    room: {
      name: "IT",
    },
  },
};

const newStudent = { ...student }; // Không lấy được các object bên trong thằng room
console.log(newStudent);

const newStudent2 = Object.assign({}, student); // Không lấy được các object bên trong thằng room
// newStudent2.school.name = "Designer"; // Thay đổi newStudent2 nhưng newStudent cũng bị thay đổi theo
console.log(newStudent2);
// -> Nếu object bao gồm nhiều object lồng vào nhau thì nên sử dụng cách dưới này còn nếu không thì sử dụng spread operator hoặc object assign
const newStudent3 = JSON.parse(JSON.stringify(student));
newStudent3.school.room.name = "Designer";
console.log(newStudent3);
