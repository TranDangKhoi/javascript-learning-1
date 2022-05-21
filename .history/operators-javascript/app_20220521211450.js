// Logical Operators > >= < <= =
// -> Đã biết qua việc học các ngôn ngữ lập trình khác nên xin phép bỏ qua

// Loose Equality vs Strict Equality
// == (2 dấu =) là loose quality vs === ( 3 dấu = ) là strict equality
// Loose Equality
console.log("=== vs ==");
console.log(10 == 10);
console.log(10 == "10"); // vẫn trả về true do vấn đề về type coercion trong js
// -> cố gắng convert "10" sang dạng number -> sẽ trả về true
console.log(true == 1); // trả về true vì Number(true) sẽ trả về 1 -> 1 = 1
console.log(1 == "01"); // js lại convert 01 sang dạng number -> "01" = 1 -> trả về true
console.log(null == ""); // js sẽ convert null sang dạng string -> biểu thức sẽ thành "null" == "" -> trả về false
console.log(typeof 10); // number
console.log(typeof "10"); // string
// -> Loose Equality thì nó sẽ check theo giá trị thui còn không check kiểu của dữ liệu
// Strict Equality 
console.log(10 === "10"); // trả về false
console.log(10 !== "10"); // trả về true
//-> Strict Equality sẽ check cả giá trị và cả kiểu của dữ liệu nữa
// 1 trường hợp ảo ma của loose equality
console.log(true == "true"); // giá trị true bên trái sẽ đc convert thành number 
// -> convert true thành 1 -> 1 == "true" , mà 1 thì không thể = string "true đc" -> trả về false