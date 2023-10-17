function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');
const bg = document.body;
function changeColor(ent) {
  color.textContent = bg.style.backgroundColor = getRandomHexColor();
}
btn.addEventListener('click', changeColor);
