// get input form value to number
function getInputValueNumber(id){
  let element = Number(document.getElementById(id).value);
  return element;
}

// get input form value
function getInputValue(id){
  let element = document.getElementById(id).value;
  return element;
}

// get inner text 
function getInnerTextNumber(id){
  const element = Number(document.getElementById(id).innerText);
  return element;
}

// set inner text
function setInnerText(value){
  const element = document.getElementById("main-balance");
  element.innerText = value;
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

    const mainBalance = getInnerTextNumber('main-balance');
    
    // input form validation
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
    setInnerText(totalBalance);
});

// money withdraw feature
document.getElementById('withdraw-money-btn').addEventListener('click', function(event){
  event.preventDefault();

  // select elements
  const mainBalance = getInnerTextNumber("main-balance");

  const cashoutAmount = getInputValueNumber("cashout-amount");

  const currentBalance = mainBalance - cashoutAmount;

  setInnerText(currentBalance);
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