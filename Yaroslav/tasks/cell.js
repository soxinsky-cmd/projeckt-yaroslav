//
function getRandomInt(min, max) {
    //
  min = Math.ceil(min);
  //
  max = Math.floor(max);
  //
  return Math.round(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
};
//
var sign = prompt("Угадайте число между 0 и 10:");
let randomNumber = getRandomInt(0,10);

console.log("Выпало случайное число: ", randomNumber);
console.log("Вы загадали число: ", sign);

if ( randomNumber == sign){
  alert('Это сообщение Alert. Угадал!');
  console.log("Угадал!");
}else{
  alert('Это сообщение Alert. Не угадал!');
  console.log(" Не угадал!");
}
