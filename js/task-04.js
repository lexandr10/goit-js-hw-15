let counterValue = 0;
const valueResult = document.querySelector('#value');
const valDecrement = document.querySelector('[data-action="decrement"]');
const valIncrement = document.querySelector('[data-action="increment"]');
const onClickDecrementBtn = () => {
  counterValue -= 1;
  valueResult.textContent = counterValue;
};
const onClickIncrementBtn = () => {
  counterValue += 1;
  valueResult.textContent = counterValue;
};
valDecrement.addEventListener('click', onClickDecrementBtn);
valIncrement.addEventListener('click', onClickIncrementBtn);
