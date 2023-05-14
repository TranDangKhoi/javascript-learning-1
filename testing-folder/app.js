// async function fetchToDos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await res.json();
//   return data;
// }

// async function secondFetchToDos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/4");
//   const data = await res.json();
//   return data;
// }

// async function getAllData() {
//   const [todosResult, todosResult2] = await Promise.allSettled([
//     fetchToDos(),
//     secondFetchToDos(),
//   ]);
//   if (todosResult.status === "rejected") {
//     const err = todosResult.reason;
//     console.log(err);
//   } else {
//     const todos = todosResult.value;
//     console.log(todos);
//   }
//   if (todosResult2.status === "rejected") {
//     const err = todosResult2.reason;
//     console.log(err);
//   } else {
//     const todos2 = todosResult2.value;
//     console.log(todos2);
//   }
// }

// getAllData();

function task(message) {
  // emulate time consuming task
  let n = 1000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}

console.log("Start script...");
task("Call an API");
console.log("Done!");
