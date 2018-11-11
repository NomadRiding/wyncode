const axios = require('axios');

function handleResolve(){
  console.log("This was resolved.");
}

function handleReject(){
  console.log("This promise was rejected");
}

const prom = axios.get('https://google.com');


prom.then(handleResolve, handleReject);




// let i = 0;
//
// while (i < 100) {
//   console.log(i);
//   i++;
// }
//

// prom.then(function(){
//   console.log("This promise was kept!");
// }, function(){
//   console.log("This promise was broken.");
// })
//
// console.log("something else");
