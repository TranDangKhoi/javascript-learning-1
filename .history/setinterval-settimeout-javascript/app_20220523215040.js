const timeOut = setTimeout(() => {
    alert("call me after 3 seconds");
}, 1000);
clearTimeout(timeOut);
// đếm tới, VD truyền vào 1000 thì đếm đủ 1s thì thực hiện
// chức năng trong code block

// const timer = setInterval(function () {
//     console.log("Call me");
// }, 2000)
// clearInterval(timer);