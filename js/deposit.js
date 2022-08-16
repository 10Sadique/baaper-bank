// deposit event handler
document.getElementById('btn-deposit').addEventListener('click', () => {
    // getting deposit amout from the input field
    const deposit = document.getElementById('deposit-amount')
    const newDepositAmountString = deposit.value
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // getting depoist innerText from deposit card 
    const depositTotalElement = document.getElementById('deposit-total')
    const prevDepositTotalString = depositTotalElement.innerText
    const prevDepositTotal = parseFloat(prevDepositTotalString)
    
    // getting total balance amount
    const balance = document.getElementById('balance-total')
    const prevBalanceTotalString = balance.innerText
    const prevBalanceTotal = parseFloat(prevBalanceTotalString)

    if (newDepositAmount > 0) {
        // current balance and deposit amount
        const currDepositTotal = prevDepositTotal + newDepositAmount
        const currBalanceTotal = prevBalanceTotal + newDepositAmount
    
        // updating deposit amount
        depositTotalElement.innerText = currDepositTotal
    
        // updating balance amount
        balance.innerText = currBalanceTotal
    } else {
        alert('Enter correct deposit amount.')
    }

    // clearning input field
    deposit.value = ''
})