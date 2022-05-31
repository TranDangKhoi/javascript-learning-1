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
const advancedReversedString = ((str2) => {
    const wordsArray2 = str2.split(" ");
    console.log(wordsArray2);
    const revWordsArray2 = wordsArray2.map((item) => item.split("").reverse().join("").join(" "));
    console.log(revWordsArray2);
    const revWordsArray3 = revWordsArray2;
    console.log(revWordsArray3);
})

console.log(advancedReversedString("im in love"));

// B1: chuyển thành dạng array
// B2: Đảo thứ tự từ của từng phần tử trong mảng
// B3: biến nó lại thành string