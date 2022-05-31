const animals = ["Tiger", "Lion", "Horse", "Elephant"];
// array.slice(): Tạo ra một mảng copy của mảng ban đầu
const animalsSlice = animals.slice();
console.log(animalsSlice);

//array.slice(start) -> start là vị trí index ở trong mảng
const animalsSlice2 = animals.slice(1);
console.log(animalsSlice2);
// array.slice(start,end) -> start là vị trí index bắt đầu, end là vị trí index kết thúc
const animalsSlice3 = animals.slice(1, 3);
console.log(animalsSlice3);
// array.slice(số âm)
const animalsSlice4 = animals.slice(-1);
console.log(animalsSlice4);