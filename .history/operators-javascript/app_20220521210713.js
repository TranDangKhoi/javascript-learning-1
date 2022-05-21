// Logical Operators > >= < <= =
// -> Đã biết qua việc học các ngôn ngữ lập trình khác nên xin phép bỏ qua

// Loose Equality vs Strict Equality
// == (2 dấu =) là loose quality vs === ( 3 dấu = ) là strict equality
console.log("=== vs ==");
console.log(10 == 10);
console.log(10 == "10"); // vẫn trả về true do vấn đề về type coercion trong js
// -> cố gắng convert "10" sang dạng number -> sẽ trả về true
console.log(true == 1); // trả về true vì Number(true) sẽ trả về 1 -> 1 = 1
console.log(1 == "01"); // js lại convert 01 sang dạng number -> "01" = 1 -> trả về true
console.log(null == ""); // js sẽ convert null sang dạng string -> biểu thức sẽ thành "null" == "" -> trả về false
console.log(typeof 10);
console.log(typeof "10");