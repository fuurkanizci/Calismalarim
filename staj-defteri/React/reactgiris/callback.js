//setTimeout(() =>{
//    console.log("merhaba");
//
//}, 2000)
//setInterval(() => {
//  console.log("Merahaba ben her saniye çalışacağım");
//}, 1000);
//const sayHi = (cb) => {
//    cb();
//};
//sayHi(() =>{
//    console.log("hello");
//});

import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())
.then((users) => {
 console.log(
   "Kullanıcılar Yüklendi!",
   users
 );
 fetch("https://jsonplaceholder.typicode.com/albums")
   .then((data) => data.json())
   .then((albums) => console.log("album yuklendi", albums));
});
// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       reject({ text: "Selam" });
//     }

//     resolve("Bir problem oluştu!");
//   });
// };

// getComments(2)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
