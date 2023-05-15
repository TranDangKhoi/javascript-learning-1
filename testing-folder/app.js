const weekDays = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ nhật",
];

function whateverItIs(arr, x) {
  arr.splice(x, 6);
  arr.splice(6 - 1, x);
  console.log(arr);
}

whateverItIs(weekDays, 0);
