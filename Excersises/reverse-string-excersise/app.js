//1. Đảo ngược một chuỗi. Ví dụ: "My name is Evondev" -> Evondev is name my

const reversedString = (str) => {
  const wordsArray = str.split(" ");
  console.log(wordsArray);
  const revWordsArray = wordsArray.reverse();
  console.log(revWordsArray);
  const revStr = revWordsArray.join(" ");
  return revStr;
};

console.log(reversedString("My name is Khoi"));

// Bài tập 2: Đảo ngược một chuỗi bao gồm các kí tự
// VD: Im in love -> evol ni mi
const advancedReverseString = (str) => {
  const arrStr = str.split(" ").reverse();
  const revStr = arrStr
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
  return revStr;
};

console.log(advancedReverseString("Im in love"));

// B1: chuyển thành dạng array
// B2: Đảo thứ tự từ của từng phần tử trong mảng
// B3: biến nó lại thành string

// Bài tập 3: Capitalize một chuỗi kí tự
// VD: i am handsome -> I Am Handsome

const capitalizedString = (str) => {
  const capStr = str
    .toLowerCase()
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
  return capStr;
};

//B1: biến giá trị str truyền vào thành toLowerCase() hết đã
//B2: Tách ra thành mảng
//B3: toUpperCase các phần tử string trong mỗi phần tử trong mảng
//B4: Join lại thành một đoạn string thường

console.log(capitalizedString("I AM handsome"));
