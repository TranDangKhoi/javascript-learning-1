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
// new Date() -> In ra ngày giờ hiện tại