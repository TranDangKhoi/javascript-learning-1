//1. Đảo ngược một chuỗi. Ví dụ: "My name is Evondev" -> Evondev is name my
function reverseString(yourStr) {
    const str = "My name is Khoi";
    const wordsArray = str.split(" ");
    console.log(wordsArray);
    const revWordsArray = wordsArray.reverse();
    console.log(revWordsArray);
    const revStr = revWordsArray.toString();
    console.log(revStr);
}