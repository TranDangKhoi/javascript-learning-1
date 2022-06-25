// 2.1 document.querySelector();
const welcome = document.querySelector(".welcome-text .subtitle");
console.log(welcome);
// 2.2 document.querySelectorAll(); -> trả về một nodeList chứa danh sách các node
// còn nếu không có thì trả về empty (nodeList rỗng)
// nodeList và array
// Giống:
// Nó có thể loop (for, for of) và sử dụng forEach
// Khác:
// Không thể dùng các method giống như array như pop,push,shift,unshift ...
const multiNode = document.querySelectorAll(".item");
// const multiNode2 = multiNode.map((item) => item); // lỗi không sử dụng được map
const multiNode3 = multiNode.forEach((item) => console.log(item)); // sử dụng được forEach
console.log("~ multiNode", multiNode);

// 2.3 document.getElementsByClassName("classname") -> giống querySelectorAll()
// Nhưng không phải trả về một NodeList mà trả về một HTMLCollection chứa danh sách các node
// Nếu không có thì trả về empty

const classNode = document.getElementsByClassName("item");
console.log(classNode);

// 2.4 document.getElementsByTagName -> trả về htmlCollection
const tagNode = document.getElementsByTagName("li");
console.log("tagNode", tagNode);

// 2.5 document.getElementById("id") -> trả về 1 node
// Nếu không tìm thấy thì trả về null
const idNote = document.getElementById("spinner");
console.log("idNote", idNote);

// 2.6 getAttribute
