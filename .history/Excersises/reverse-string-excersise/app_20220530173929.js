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