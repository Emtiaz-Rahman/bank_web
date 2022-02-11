document.getElementById('submit_button').addEventListener('click', function () {
    const userFiELD = document.getElementById('user_email');
    const userEmail = userFiELD.value;

    const passwardField = document.getElementById('user_password');
    const userPassward = passwardField.value;

    if (userEmail == 'abc@gmail.com' && userPassward == 'abc') {
        window.location.href = 'banking.html'
    }

})