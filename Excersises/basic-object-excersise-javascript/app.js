const user = {
  name: "Tofu",
};

// CÁCH LÀM CLONE OBJECT NHƯ NÀY CỰC KÌ NGUY HIỂM
const newUser = user;

// Lúc này name của thằng user cũng sẽ bị đổi theo thằng newUser do tính chất byReferences trong JS
// Bởi vì nó thay đổi cả vùng bộ nhớ của name trong object user thành vùng bộ nhớ của name trong object newUser
newUser.name = "Khoi";

console.log(user);
console.log(newUser);
