

// document.getElementById('depositBtn').addEventListener('click', function () {
//     const depositeAmount = document.getElementById('depositeAmount');

//     const depositeNumber = parseFloat(depositeAmount.value);

//     const currentDeposite = document.getElementById('currentDeposite');
//     const currentDepositeNumber = parseFloat(currentDeposite.innerText);

//     const totalDeposit = currentDepositeNumber + depositeNumber;
//     currentDeposite.innerText = totalDeposit;

//     depositeAmount.value = '';
// })



document.getElementById('depositBtn').addEventListener('click', function () {
    const depositeAmount = document.getElementById('depositeAmount');

    const depositeNumber = parseFloat(depositeAmount.value);
    const currentDeposite = document.getElementById('currentDeposite');
    const currentDepositeNumber = parseFloat(currentDeposite.innerText);
    const totalDeposit = currentDepositeNumber + depositeNumber;
    currentDeposite.innerText = totalDeposit;

    const currrentBalance = document.getElementById('currentBalance');
    const currentBalanceNumber = parseFloat(currrentBalance.innerText);

    const totalBalance = totalDeposit + currentBalanceNumber;
    currrentBalance.innerText = totalBalance;

    depositeAmount.value = '';



})