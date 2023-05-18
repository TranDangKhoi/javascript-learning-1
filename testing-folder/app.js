const daysInAWeek = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ nhật",
];
// x = 0 =>  [CN, T2, T3, ...]
// x = 1 =>  [T2, T3 ..., CN]
// x = 2 => [T3, T4, ... CN, T2]

const move = (x) => {
  let arr = daysInAWeek.splice(x, daysInAWeek.length - 1);
  arr.unshift(daysInAWeek[daysInAWeek.length - 1]);
  return arr;
};

console.log(move(1));
