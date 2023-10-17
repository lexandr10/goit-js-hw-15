const form = document.querySelector('.login-form');
function getMassege(ent) {
  ent.preventDefault();
  const { email, password } = ent.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    return alert(`Не всі поля були заповненні`);
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    ent.currentTarget.reset();
  }
}
form.addEventListener('submit', getMassege);
