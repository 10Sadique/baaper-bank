const btnSubmit = document.getElementById('btn-submit')
const userEmail = document.getElementById('user-email')
const userPassword = document.getElementById('user-password')

// Step 1: Add submit button event handler
btnSubmit.addEventListener('click', () => {
    // Step 2: Get email address value
    let email = userEmail.value

    // Step 3: Get password of user
    let password = userPassword.value
    
    // Step 4: Verify email and password
    if (email === 'user@email.com' && password === 'secret') {
        window.location.href = 'bank.html'
    } else {
        alert('Enter correct email and password')
    }
})