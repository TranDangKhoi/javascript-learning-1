//1. Đảo ngược một chuỗi. Ví dụ: "My name is Evondev" -> Evondev is name my
function reverseString(str) {

    const wordsArray = str.split(" ");
    console.log(wordsArray);
    const revWordsArray = wordsArray.reverse(; console.log(revWordsArray);
        const revStr = revWordsArray.toString();
        return revStr;
    }

    console.log(reverseString("My name is Khoi"));