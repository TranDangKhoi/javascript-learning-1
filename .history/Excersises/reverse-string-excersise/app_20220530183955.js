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
// VD: Im in love -> evol ni mi
const advancedReversedString = ((str2) => {
    if (!str2) return null;
    const arrStr = str2.split(" ").map((item) => item.split("").reverse().join("")).reverse().join(" ");
    console.log(arrStr);
})

console.log(advancedReversedString("im in love"));

// B1: chuyển thành dạng array
// B2: Đảo thứ tự từ của từng phần tử trong mảng
// B3: biến nó lại thành string

// Bài tập 3: Capitalize một chuỗi kí tự
// VD: i am handsome -> I Am Handsome

const capitalizedString = ((str3) => {
    if (!str3 || str3.length <= 0) return null;
    const capString = str3.toLowerCase().split(" ").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
    return capString;
})

console.log(capitalizedString("I AM handsome"));