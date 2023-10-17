// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//  підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//     у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
function getName(event) {
  if (event.target.value === '') {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = event.target.value;
  }
}
input.addEventListener('input', getName);
