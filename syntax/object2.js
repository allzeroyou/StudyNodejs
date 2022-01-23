var f = function(){
  console.log(1+1);
  console.log(1+2);
}

//1. array
var a = [f];
a[0](); //배열 a의 0번째 요소는 함수 자체임. 즉, f(); 과 동일함!

//2. object 
var o = {
  func : f
}

o.func(); // 함수를 object로 담을 수 있음.



