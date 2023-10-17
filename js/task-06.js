const input = document.querySelector('#validation-input');
function validImput(evt) {
  if (
    Number(evt.currentTarget.value.trim().length) ===
    Number(evt.currentTarget.dataset.length)
  ) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
input.addEventListener('blur', validImput);
