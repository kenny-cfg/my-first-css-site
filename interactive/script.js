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

let counterJsSeparate = 0;
let counterJsSeparateButton = document.getElementById("counter-button-js-separate");
let counterJsElement = document.getElementById("counter-js-separate");

function updateCounterJsSeparateElement() {
  counterJsElement.textContent = `Count is ${counterJsSeparate}`;
}

counterJsSeparateButton.addEventListener("click", () => {
  counterJsSeparate++;
  updateCounterJsSeparateElement();
})

updateCounterJsSeparateElement();