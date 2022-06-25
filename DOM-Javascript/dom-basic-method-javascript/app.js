// 1.selector.getAttribute("attribute")
// selector: là 1 cái
// selectorAll: là 1 danh sách
// attribute -> được hiểu là thuộc tính của thẻ (src, href, class, id, style,...)
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
const liAtr = li.forEach((item) => console.log(item.getAttribute("class")));
console.log("li", li);

// 2. selector.setAttribute("attribute",value) -> set giá trị cho attribute của selector

const allAnchor = document.querySelectorAll("a.link");
const allAnchorAtr = allAnchor.forEach((item) =>
  item.setAttribute("target", "_blank")
);

// 3. selector.removeAttribute("attribute")

const p = document.querySelector("#spinner");
const pAttributeRemove = p.removeAttribute("style");

// 4. selector.hasAttribute("attribute"); -> kiểm tra xem selector có attribute hay không
// nếu có sẽ trả về giá trị true còn không thì sẽ trả về false

console.log(
  allAnchor.forEach((item) => console.log(item.hasAttribute("class")))
);
