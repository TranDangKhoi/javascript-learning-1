// document.querySelector();
const welcome = document.querySelector(".welcome-text .subtitle");
console.log(welcome);
// document.querySelectorAll(); -> trả về một nodeList chứa danh sách các node
// còn nếu không có thì trả về empty (nodeList rỗng)
// nodeList và array
// Giống:
// Nó có thể loop forEach, map, filter
// Khác:
// Không thể dùng các method giống như array như pop,push,shift,unshift ...
const multiNode = document.querySelectorAll(".item");
console.log("~ multiNode", multiNode);
