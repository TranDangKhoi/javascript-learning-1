// Viết 1 chương trình kiểm tra value đầu vào có phải là object hay không
// typeof value === "object" -> Không dùng được vì nếu truyền vào array thì array cũng được coi là một object
// {} [] null -> object array null đều đc tính là object

function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  } else {
    return false;
  }
}

const user = {
  name: "toilatofu",
  age: 19,
};

isObject(user);

// Bài 2: {a: 1, b: 2} -> [["a",1],["b",2]]

const numbers = {
  a: 1,
  b: 2,
};

const objectToArray = (obj) => {
  // check nếu không phải object thì dừng
  if (!isObject(obj)) return;
  // Nếu là object thì xử lý
  // cách 1: sử dụng Object.entries
  // if (isObject(obj)) return Object.entries(obj);
  // cách 2: sử dung object.keys và map
  // const value = Object.keys(obj).map((key) => [key, obj[key]]);
  // return value;
  // cách 3: sử dụng for in loop
  // let result = [];
  // for (let props in obj) {
  //   result.push([props, obj[props]]);
  // }
  // return result;
  // cách 4: sử dụng for in loop và hasOwnProperty(key)
  // hasOwnProperty(keys) -> nếu object chứa key thì trả về true ngược lại trả về false
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
};

console.log(objectToArray({ a: 1, b: 2 }));

// Bài 3: Truyền vào bên trong hàm 1 object và sau đó là 1 key bạn muốn xóa
// VD: ({a: 1, b: 2} , 'b') -> {a:1}

const deleteAKey = (obj, key) => {
  const newObj = Object.assign({}, obj); // Clone ra thành một obj mới
  // hoặc dùng spread operator
  // const newObj2 = { ...obj };
  delete newObj[key];
  return newObj;
};

console.log(deleteAKey({ a: 1, b: 2, c: 3 }, "a"));

// Trường hợp bạn muốn xóa nhiều key trong một object thì sao

const deleteKeys = (obj, ...keys) => {
  const newObj = { ...obj };
  keys.forEach((item) => {
    delete newObj[item];
  });
  return newObj;
};

console.log(deleteKeys({ a: 1, b: 2, c: 3 }, "a", "b"));

//4. So sánh 2 object và thông báo nếu 2 cái = nhau

const firstStudent = {
  name: {
    firstName: "Tran",
    lastName: "Khoi",
  },
  age: 19,
  school: {
    schoolName: "FPT",
    room: {
      roomNumber: 101,
      floor: 4,
    },
  },
};

const secondStudent = {
  name: {
    firstName: "Tran",
    lastName: "Khoi",
  },
  age: 19,
  school: {
    schoolName: "FPT",
    room: {
      roomNumber: 101,
      floor: 4,
    },
  },
};

const equalObject = (obj1, obj2) => {
  const JsonObj1 = JSON.stringify(Object.entries(obj1));
  const JsonObj2 = JSON.stringify(Object.entries(obj2));
  if (JsonObj1 === JsonObj2) {
    return "Equal";
  } else {
    return "Not Equal";
  }
};

console.log(equalObject(firstStudent, secondStudent));
