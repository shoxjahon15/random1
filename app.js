// let num = 100;

// function getRandomInt(num) {
//   return Math.floor(Math.random() * num);
// }
// alert(getRandomInt(100)); \


function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

alert(getRandomNumberBetween(100,500));