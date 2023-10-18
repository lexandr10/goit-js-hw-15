const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize = `${input.value}px`;
function betterText(ent) {
  text.style.fontSize = `${ent.currentTarget.value}px`;
}
input.addEventListener('input', betterText);
