//1. selector.ClassList.add("abc") // thêm class

const container = document.querySelector(".container");

container.classList.add("is-active");

//2. selector.ClassList.remove("abc"); // xóa class

container.classList.remove("container");

//3. selector.ClassList.contains("abc") // kiểm tra xem selector có chứa clsas đấy hay không

console.log(container.classList.contains("container"));
console.log(container.classList.contains("is-active"));

//4. selector.ClassList.toggle("abc") -> giống như công tắc bật tắt

container.classList.toggle("is-active");

//5. selector.className -> trả ra chuỗi các class của selector
const title = document.querySelector(".title");
console.log(title.className);
title.className = "title";
console.log(title.className);
