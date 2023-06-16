// var sortArray = function (nums) {
//   for (let i = 0; i < nums.length; ++i) {
//     var min_index = i;
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[j] < nums[min_index]) {
//         min_index = j;
//       }
//     }
//     if (min_index !== i) {
//       var temp = nums[i];
//       nums[i] = nums[min_index];
//       nums[min_index] = temp;
//     }
//     console.log(nums);
//   }
// };

// console.log(sortArray([9, 1, 2, 4, 10, 3, -10]));

// const removeDuplicated = (nums) => {
//   const removedDuplicatedArray = nums.filter((num, index) => {
//     return nums.indexOf(num) === index;
//   });
//   return removedDuplicatedArray;
// };

// const whateverSortThisIs = (nums) => {
//   for (let i = 0; i < nums.length; ++i) {
//     // var minIndex = 0;
//     // chạy liên tiếp bao giờ xong thì mới quay lại vòng lặp lồng nó
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[j] < nums[i]) {
//         var temp = nums[i]; // temp = 9
//         nums[i] = nums[j]; // num[i] = 11
//         nums[j] = temp; // num[j] = 9 = temp
//         console.log(nums);
//       }
//     }
//   }
//   return nums;
// };

// console.log(whateverSortThisIs([9, 1, 2, 4, 10, 3, -10]));
// [9, 4, 1, 3] -> [4, 4, 1, 3]
// [4, 9, 1, 3]
// [4, 1, 9, 3]
// ...
// const bubbleSort = (nums) => {
//   var isSwapped = false;
//   for (i = 0; i < nums.length; i++) {
//     isSwapped = false;
//     for (j = 0; j < nums.length; j++) {
//       if (nums[j] > nums[j + 1]) {
//         var temp = nums[j + 1];
//         nums[j + 1] = nums[j];
//         nums[j] = temp;
//         isSwapped = true;
//       }
//       if (!isSwapped) {
//         break;
//       }
//     }
//   }
//   console.log(nums);
// };

// console.log(bubbleSort([9, 4, 1, 3]));
// 9, 4, 1, 3
// 1, 4, 9, 3
//
// const selectionSort = (nums) => {
//   for (i = 0; i < nums.length; i++) {
//     var min_index = i;
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[min_index]) {
//         min_index = j;
//       }
//     }
//     var temp = nums[min_index];
//     nums[min_index] = nums[i];
//     nums[i] = temp;
//   }
//   return nums;
// };

// const selectionSort2 = (nums) => {
//   for (i = 0; i < nums.length; i++) {
//     var minIndex = i;
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[j] < nums[minIndex]) {
//         minIndex = j;
//       }
//     }
//     var temp = nums[minIndex];
//     nums[minIndex] = nums[i];
//     nums[i] = temp;
//   }
//   return nums;
// };

// console.log(selectionSort2([9, 4, 1, 3, 5]));

// const decreasingSelectionSort = (nums) => {
//   for (i = 0; i < nums.length; i++) {
//     var min_index = i;
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[min_index] < nums[j]) {
//         min_index = j;
//       }
//     }
//     var temp = nums[min_index];
//     nums[min_index] = nums[i];
//     nums[i] = temp;
//   }
//   return nums;
// };

// console.log(decreasingSelectionSort([9, 5, 8, 1, 3]));

// const insertionSort = (nums) => {
//   for (i = 1; i < nums.length; i++) {
//     var j = i - 1;
//     var temp = nums[i];
//     while (nums[j] > temp && j >= 0) {
//       nums[j + 1] = nums[j];
//       j--;
//     }
//     nums[j + 1] = temp;
//     console.log(nums);
//   }
// };

// console.log(insertionSort([9, 4, 1, 3]));

// const removeDuplicated = (nums) => {
//   var temp = [];
//   for (i = 0; i < nums.length; i++) {}
// };

// const detectLargestAndSmallestNumberInArr = (nums) => {
//   var largest = nums[0];
//   var smallest = nums[0];
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] > largest) {
//       largest = nums[i];
//     }
//     if (nums[i] < smallest) {
//       smallest = nums[i];
//     }
//   }
//   return `The largest number is ${largest} and the smallest one is ${smallest}`;
// };

// console.log(detectLargestAndSmallestNumberInArr([-10, 0, 95, 1, 2]));

// const linearSearch = (numToFind, nums) => {
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] === numToFind) {
//       return i;
//     }
//   }
// };

// console.log(linearSearch(4, [2, 1, 2, 6, 4]));

// const bubbleSort = (nums) => {
//   for (i = 0; i < nums.length; i++) {
//     var isSwapped = false;
//     for (j = 0; j < nums.length; j++) {
//       if (nums[j] > nums[j + 1]) {
//         var temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//         isSwapped = true;
//       }
//       if (!isSwapped) {
//         break;
//       }
//     }
//   }
//   return nums;
// };

// console.log(bubbleSort([9, 4, 1, 3]));
