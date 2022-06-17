const user = {
  name: "Tofu",
};

// CÁCH LÀM CLONE OBJECT NHƯ NÀY CỰC KÌ NGUY HIỂM
const newUser = user;

// Lúc này name của thằng user cũng sẽ bị đổi theo thằng newUser do tính chất byReferences trong JS
newUser.name = "Khoi";

console.log(user);
console.log(newUser);
