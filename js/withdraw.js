

// withdraw event listener
document.getElementById('btn-withdraw').addEventListener('click', () => {
    // getting withdraw amout from the input field
    const withdraw = document.getElementById('withdraw-amount')
    const newWithdrawString = withdraw.value
    const newWithdraw = parseFloat(newWithdrawString)

    // getting withdraw innerText from withdraw card 
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const prevWithdrawTotalString = withdrawTotalElement.innerText
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString)

    // getting total balance amount
    const balance = document.getElementById('balance-total')
    const prevBalanceTotalString = balance.innerText
    const prevBalanceTotal = parseFloat(prevBalanceTotalString)

    if (newWithdraw > 0) {
        if (newWithdraw <= prevBalanceTotal) {
            
            // current balance and withdraw amount
            const currBalanceTotal = prevBalanceTotal - newWithdraw
            const currWithdraw = prevWithdrawTotal + newWithdraw
            
            // updating withdraw amount
            withdrawTotalElement.innerText = currWithdraw
            
            // updating balance amount
            balance.innerText = currBalanceTotal
    
        } else {
            alert(`Insufficient balance.`)
        }
    } else {
        alert('Enter correct withdraw amount.')
    }
    
    // clearning input field
    withdraw.value = ''
})



