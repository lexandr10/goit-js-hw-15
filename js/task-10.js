function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів
// в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//   скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію
// getRandomHexColor для отримання кольору.

const box = document.querySelector('.controls');
const btnCreate = document.querySelector('button[data-create]');
const btnDelete = document.querySelector('button[data-destroy]');
const number = document.querySelector('[type="number"]');
const container = document.querySelector('#boxes');
console.log(number);
function addBoxes() {
  if (
    Number(number.value.trim()) > Number(number.max) ||
    Number(number.value.trim()) < Number(number.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(number.value.trim());
  }
  number.value = '';
}

btnCreate.addEventListener('click', addBoxes);
btnDelete.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  number.value = '';
  container.innerHTML = '';
}

// }
function createBoxes(amount) {
  let size = 30;
  const arrDiv = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const divs = `<div class="container" style="background-color: ${getRandomHexColor()}; weight: ${size}px; height: ${size}px;"></div>`;
    arrDiv.push(divs);
  }
  container.insertAdjacentHTML('beforeend', arrDiv.join(''));
}
