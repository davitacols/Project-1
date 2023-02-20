// Get the sales elements from the DOM
const totalSalesElem = document.getElementById("total-sales");
const todaySalesElem = document.getElementById("today-sales");
const yesterdaySalesElem = document.getElementById("yesterday-sales");

// Update the sales numbers
function updateSalesNumbers() {
  // Get the sales data from the server (or from local storage, etc.)
  const totalSales = 1234;
  const todaySales = 56;
  const yesterdaySales = 78;

  // Update the DOM elements with the new sales data
  totalSalesElem.textContent = totalSales;
  todaySalesElem.textContent = todaySales;
  yesterdaySalesElem.textContent = yesterdaySales;
}

// Update the sales numbers every 10 seconds
setInterval(updateSalesNumbers, 10000);
