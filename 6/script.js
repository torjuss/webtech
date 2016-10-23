var incomeElement = document.getElementById("income");
var wealthElement = document.getElementById("wealth");

incomeElement.addEventListener("change", function() {
  updateTax();
})

wealthElement.addEventListener("change", function () {
  updateTax();
})

function updateTax() {
  var taxValue = tax(incomeElement.value, wealthElement.value);
  document.getElementById("tax").value = taxValue;
}

function tax(income, wealth) {
  return 0.35 * income + 0.25 * wealth;
}
