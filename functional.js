function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseInt(valueInText);
    inputField.value = ''
    return value;
};
function getInnerText(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateTotal(fieldId, amount) {
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);
    const previousTotal = getInnerText(fieldId)
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerText('balance-total')
    let newBlance;
    if (isAdding == true) {
        newBlance = previousBalance + amount;
    }
    else {
        newBlance = previousBalance - amount;
    }

    document.getElementById('balance-total').innerText = newBlance;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');

    if (amount > 0) {
        updateTotal('deposit-total', amount)
        updateBalance(amount, true);
    }


});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerText('balance-total')
    console.log(balance)
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }

});
// end js
