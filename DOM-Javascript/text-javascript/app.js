// 1. textContent -> lấy được content bị display:none và lấy theo cấu trúc trong file html

const spinner = document.querySelector("#spinner");
// Thay đổi textContent
// spinner.textContent = "Hello new content";
console.log(spinner.textContent);

// 2. innerText -> không lấy được content bị display:none, không lấy được theo
//  cấu trúc trong file html và viết liền thẳng cho tới khi hết hàng
console.log(spinner.innerText);

// 3. innerHTML -> lấy ra nội dung của selector (bao gồm cả HTML)
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">hello HTML</div>`; // chèn dữ liệu vào bên trong thẻ có id là #spinner

const insideOfDemo = document.querySelector(".demo");
console.log(insideOfDemo.innerHTML);
insideOfDemo.innerHTML = "<p>This paragraph is inside of div class demo</p>"; // chèn dữ liệu vào bên trong thẻ có class là demo mới khởi tạo ở phía trên
