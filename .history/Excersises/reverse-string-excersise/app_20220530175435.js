//1. Đảo ngược một chuỗi. Ví dụ: "My name is Evondev" -> Evondev is name my

const reversedString = ((str) => {
    const wordsArray = str.split(" ");
    console.log(wordsArray);
    const revWordsArray = wordsArray.reverse();
    console.log(revWordsArray);
    const revStr = revWordsArray.join(" ");
    return revStr;
})


console.log(reversedString("My name is Khoi"));

// Bài tập 2: Đảo ngược một chuỗi bao gồm các kí tự
const str2 = "im in love"; // ->  evol ni mi
const wordsArray2 = str2.split(" ");
console.log(wordsArray2);
const revWordsArray2 = wordsArray2.map((value) => value.slice(-9));

// B1: chuyển thành dạng array
// B2: Đảo thứ tự từ của từng phần tử trong mảng
// B3: biến nó lại thành string