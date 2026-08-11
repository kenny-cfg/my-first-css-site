let stock = 10;
const stockButton = document.getElementById("stock-button");
const stockIndicator = document.getElementById("stock-indicator");

const updateStockIndicator = () => {
  stockIndicator.textContent = `Stock is ${stock}`;
}

stockButton.addEventListener("click", () => {
  stock--;
  updateStockIndicator();
})

updateStockIndicator();