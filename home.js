document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();

    // selector 
    const userPin = 1234;

    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById("account-number").value;

    const amount = Number(document.getElementById("amount-digit").value);

    const pinNumber = parseInt(document.getElementById("pin-number").value);

    const mainBalance = parseInt(
      document.getElementById("main-balance").innerText
    );
    
    if (bank === "Select Bank") {
      alert("please select a bank");
      return;
    }

    if(accountNumber.length > 11){
        alert("please type correct account number");
        return;
    }

    if (isNaN(amount)) {
      alert("please enter amount digit");
      return;
    }

    if(userPin !== pinNumber){
        alert("please provide valid pin number");
        return;
    }

    const totalBalance = amount + mainBalance;
    document.getElementById('main-balance').innerText = totalBalance;
});

document.getElementById("logout-btn").addEventListener('click', function(){
    window.location.href = './index.html';
});