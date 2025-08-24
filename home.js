// reusable get element function
function getInputValueNumber(id){
  let element = Number(document.getElementById(id).value);
  return element;
}

function getInputValue(id){
  let element = document.getElementById(id).value;
  return element;
}


// add money feature
document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();

    // selector 
    const userPin = 1234;

    const bank = getInputValue("bank");

    const accountNumber = getInputValue("account-number");

    const amount = getInputValueNumber('amount-digit');

    const pinNumber = getInputValueNumber("pin-number");

    const mainBalance = parseInt(
      document.getElementById("main-balance").innerText
    );
    
    if (bank === "Select Bank") {
      alert("please select a bank");
      return;
    }

    if(accountNumber.length < 11){
        alert("please type correct account number");
        return;
    }

    if (isNaN(amount) || amount < 1) {
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

// money withdraw feature
document.getElementById('withdraw-money-btn').addEventListener('click', function(event){
  event.preventDefault();

  // select elements
  const mainBalance = Number(document.getElementById("main-balance").innerText);

  const cashoutAmount = getInputValueNumber("cashout-amount");

  const currentBalance = mainBalance - cashoutAmount;

  document.getElementById('main-balance').innerText = currentBalance;
});

// logout feature
document.getElementById("logout-btn").addEventListener('click', function(){
    window.location.href = './index.html';
});


// section toggle 
document.getElementById("add-money-area").addEventListener('click', function(){
  document.getElementById("cashout-section").style.display = 'none';
  document.getElementById("add-money-section").style.display = "block";

});

document.getElementById("cashout-area").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "block";
});