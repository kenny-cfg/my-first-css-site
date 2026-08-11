let counter = 0;
const counterElement = document.getElementById("counter");

function updateCounterElement() {
  counterElement.textContent = `Count is ${counter}`;
}

function buttonClicked() {
  counter++;
  updateCounterElement();
}

updateCounterElement();