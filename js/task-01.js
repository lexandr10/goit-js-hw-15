// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
const list = document.querySelectorAll('.item');
let result = 0;
list.forEach(elem => {
  result++;
  const title = elem.querySelector('h2').innerHTML;
  const itemsLength = elem.querySelectorAll('li').length;
  console.log(`
Category: ${title}
Elements: ${itemsLength}`);
});
console.log(`Number of categories: ${result}`);
