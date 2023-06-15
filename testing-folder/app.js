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
