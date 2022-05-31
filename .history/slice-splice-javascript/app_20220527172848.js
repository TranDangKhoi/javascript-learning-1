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
// array.slice(số âm) -> số âm thì thay vì đi từ trái qua phải, thì index sẽ bắt đầu từ phải qua trái
const animalsSlice4 = animals.slice(-2);
console.log(animalsSlice4);


// SPLICE
const pets = ["Dog", "Cat", "Bird", "Hamster"];
// array.splice() -> nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng thành 1 phần tử khác

// splice(start)
const petSplice2 = pets.splice(2);
console.log(petSplice2);

//splice(start, deleteCount): deleteCount -> số lượng phần tử muốn xóa hoặc thay thế

const petSplice3 = pets.splice(0, 1);