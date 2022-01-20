let number = [1, 300, 12];
let i = 0;
let total = 0;

while(i < number.length){
  total = total + number[i];
  i = i + 1;
}

console.log(`total : ${total}`);