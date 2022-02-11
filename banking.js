function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputValueText = input.value;
  const inputValue = parseFloat(inputValueText);
  input.value = '';
  return inputValue;
}
function updateAmount(totalId, inputValue) {
  const totalValue = document.getElementById(totalId);
  const previousTotalText = totalValue.innerText;
  const previousTotal = parseFloat(previousTotalText);
  totalValue.innerText = previousTotal + inputValue;
}
function getPreviousBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalText);
  return previousBalanceTotal;
}
function updateBalanceTotal(inputValue, addition) {
  const balanceTotal = document.getElementById('balance-total');
  const previousBalanceTotal = getPreviousBalance();
  if (addition == true) {
    balanceTotal.innerText = previousBalanceTotal + inputValue;
  }
  else if (addition == false) {
    balanceTotal.innerText = previousBalanceTotal - inputValue;
  }
}
document.getElementById('deposit-btn').addEventListener('click', function () {
  const depositValue = getInputValue('deposit-input');
  if (depositValue > 0) {
    updateAmount('deposit-total', depositValue);
    updateBalanceTotal(depositValue, true);
  }
  else {
    alert('please, enter a valid amount');
  }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const withdrawValue = getInputValue('withdraw-input');
  const previousBalance = getPreviousBalance();
  if (withdrawValue > 0 && withdrawValue < previousBalance) {
    updateAmount('withdraw-total', withdrawValue);
    updateBalanceTotal(withdrawValue, false);
  }
  else if (withdrawValue > previousBalance) {
    alert('you do not have enough money to withdraw');
  }
  else {
    alert('please, enter a valid amount');
  }
})