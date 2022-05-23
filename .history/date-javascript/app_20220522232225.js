const now = new Date();
// Built-in object
console.log(now);
// Sun May 22 2022 22:24:51 GMT+0700 (Indochina Time)
// Timezone: GMT+0700
// DaysOfWeek Month Day Year HH:MM:SS
// Timestamp & Epoch Time
// Unix Time

// Timestamp tính ra kết quả là milisecond
console.log(now.getTime()); // print timestamp -> Thời gian bây giờ - Epoch Time
console.log(new Date(0));
// 4 cách sử dụng new Date()
// new Date() -> In ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
// new Date(date string) -> 
// new Date(year,month,day,hours,minutes,seconds,miliseconds)
console.log(new Date(1653234062793));

console.log(new Date(2021, 5, 1, 23, 23, 23, 23));

// Các hàm get trong Date

const birthday = new Date(2003, 5, 11);
console.log(birthday.getFullYear());
console.log(birthday.getMonth());
console.log(birthday.getDate());
// 0-6: 0 là chủ nhật, 6 là thứ 7
console.log(birthday.getDay());
// In ra giờ
console.log(birthday.getHours());
// In ra phút
console.log(birthday.getMinutes());
// In ra giây
console.log(birthday.getSeconds());
// In ra timestamp
console.log(birthday.getTime());
console.log(`My birthday is: ${birthday}`);
// Ngoài getter ra còn có setter giống trong java

// UTC Date
console.log(birthday.getUTCFullYear());
console.log(birthday.getUTCMonth());
console.log(birthday.getUTCDate());
// 0-6: 0 là chủ nhật, 6 là thứ 7
console.log(birthday.getUTCDay());
// In ra giờ
console.log(birthday.getUTCHours());
// In ra phút
console.log(birthday.getUTCMinutes());
// In ra giây
console.log(birthday.getUTCSeconds());
// In ra timestamp
console.log(birthday.toUTCString());

// Một vài hàm khác
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString(vi - vn));