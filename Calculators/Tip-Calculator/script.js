function calculateTip() {
  var billAmount = parseFloat(document.getElementById("billAmount").value);
  var tipPercentage = parseFloat(
    document.getElementById("tipPercentage").value
  );

  if (
    isNaN(billAmount) ||
    isNaN(tipPercentage) ||
    billAmount < 0 ||
    tipPercentage < 0
  ) {
    alert("Please enter valid numbers.");
    return;
  }

  var tipAmount = (billAmount * tipPercentage) / 100;
  var totalAmount = billAmount + tipAmount;

  document.getElementById(
    "tipAmount"
  ).textContent = `Tip Amount: ₹${tipAmount.toFixed(2)}`;
  document.getElementById(
    "totalAmount"
  ).textContent = `Total Amount (including tip): ₹${totalAmount.toFixed(2)}`;
}
