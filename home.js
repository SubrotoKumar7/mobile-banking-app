document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();

    // selector 
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("amount-digit").value);

    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const mainBalance = parseInt(
      document.getElementById("main-balance").innerText
    );

    const totalBalance = amount + mainBalance;
    
    document.getElementById('main-balance').innerText = totalBalance;
});

document.getElementById("logout-btn").addEventListener('click', function(){
    window.location.href = './index.html';
});