const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
function betterText(ent) {
  text.style.fontSize = `${ent.currentTarget.value}px`;
}
input.addEventListener('input', betterText);
