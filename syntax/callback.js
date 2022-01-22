/*
function a() {
  console.log('A');
}
*/

let a = function () {
  console.log("Let's play ball");
}

function slowfunc(callback) {
  callback();
}

slowfunc(a);
