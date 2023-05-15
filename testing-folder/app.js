// const obj1 = {};s

// console.log(obj2.hasOwnProperty("a"));
// console.log(obj1.hasOwnProperty("a"));

const daysInAWeek = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ nhật",
];

const move = (x) => {
  let arr = daysInAWeek.splice(x, daysInAWeek.length - 1);
  arr.unshift(daysInAWeek[daysInAWeek.length - 1]);
  return arr;
};
console.log(move(0));
console.log(move(1));
