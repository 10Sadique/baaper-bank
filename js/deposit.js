const btnDeposit = document.getElementById('btn-deposit')
// deposit event handler
btnDeposit.addEventListener('click', () => {
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

    const currDepositTotal = prevDepositTotal + newDepositAmount
    const currBalanceTotal = prevBalanceTotal + newDepositAmount
    

    // updating deposit amount
    depositTotalElement.innerText = currDepositTotal

    // updating balance amount
    balance.innerText = currBalanceTotal

    // clearning input field
    deposit.value = ''
})