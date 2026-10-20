

// Генерируем случайное число от 1 до 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Вариант 1: сразу показать загаданное число в консоли (для отладки)
console.log('Загаданное число:', randomNumber);

// Запрашиваем ввод у пользователя
const userInput = prompt('Угадай число от 1 до 10:');

if (userInput !== null) {
  const guessedNumber = Number(userInput);

  // Вариант 2: логируем ввод пользователя
  console.log('Пользователь ввёл:', guessedNumber);

  if (guessedNumber === randomNumber) {
    alert('Отличная работа!');
    // Вариант 3: логи при победе
    console.log('Победа! Пользователь угадал число.');
  } else {
    alert(`Не угадал. Загаданное число было: ${randomNumber}`);
    // Вариант 4: логи при проигрыше
    console.log('Проигрыш. Пользователь не угадал.');
  }
} else {
  alert('Ты не ввёл число.');
  console.log('Пользователь отменил ввод (нажал Отмена).');
};