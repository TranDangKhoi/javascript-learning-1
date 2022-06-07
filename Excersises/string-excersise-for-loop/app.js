// Đảo ngược mảng dùng vòng lặp for

const loveLetter = "I love you";
let result = "";
for (i = loveLetter.length - 1; i >= 0; i--) {
  console.log(loveLetter[i]);
  result = result + loveLetter[i];
}
console.log(result);

// B1: Đảo ngược string
// B2: Biến thành array dưới dạng từng chữ 1
