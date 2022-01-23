//array
var members = ['dayeong','ke111','dy'];
// console.log(members[1]); //ke111
var i = 0;

while(i < members.length){
  console.log('Array loop :',members[i]);
  i = i + 1;
}


//object
var roles = {
  'programmer' : 'dayeong',
  'desinger' : 'ke111',
  'manager' : 'dy'
}

// console.log(roles.desinger);
// console.log(roles['desinger']); 와 동일함!

for(var name in roles){
  console.log('object => ', name,', value => ', roles[name]); 
  //name 이라는 변수 == object에서의 key !
}
