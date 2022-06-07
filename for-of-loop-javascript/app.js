// loop giá trị trong mảng và thao tác với chúng

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let value of numberArr) {
  value += 10;
  numberArr.push(value);
}
