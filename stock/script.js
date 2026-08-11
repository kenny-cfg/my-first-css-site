let stock = 10;
const stockButton = document.getElementById("stock-button");

const updateStockIndicator = () => {
  console.log(`Stock is ${stock}`)
}

stockButton.addEventListener("click", () => {
  stock--;
  updateStockIndicator();
})