let stock = 10;
const stockButton = document.getElementById("stock-button");
const stockIndicator = document.getElementById("stock-indicator");
const messageElement = document.getElementById("message");

const updateStockIndicator = () => {
  stockIndicator.textContent = `Stock is ${stock}`;
}

const setMessage = (message) => {
  messageElement.textContent = message;
  messageElement.style.backgroundColor = "red";
  messageElement.style.color = "yellow";
}

function setMessageOLD(message) {
  messageElement.textContent = message;
  messageElement.style.backgroundColor = "red";
  messageElement.style.color = "yellow";
}

stockButton.addEventListener("click", () => {
  if (stock > 0) {
    stock--;
  }
  if (stock === 0) {
    setMessage("Out of stock");
  }
  updateStockIndicator();
})

updateStockIndicator();