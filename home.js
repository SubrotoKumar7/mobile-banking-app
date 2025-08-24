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

// toggle feature reusable code
function toggleService(id){
  const services = document.getElementsByClassName("services");

  for (let service of services) {
    service.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// active status reusable code
function activeStatus(id){
  const activeStatusClass = document.getElementsByClassName("active-status");

  for(let i of activeStatusClass){
    i.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    i.classList.add('border-gray-300');
  }

  document.getElementById(id).classList.remove('border-gray-300');
  document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// user pin number
const userPin = 1234;

// add money feature
document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();

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

  const agentNumber = getInputValue("agent-number");

  const pinNumber = getInputValueNumber("cashout-pin");

  const moneyDifferent = mainBalance - cashoutAmount;

  // form validation
  if(agentNumber.length < 11){
    alert("please type correct agent number");
    return;
  }

  if(moneyDifferent < 0){
    alert("There are not enough funds in your account.");
    return;
  }

  if(pinNumber !== userPin){
    alert('Invalid Pin Number')
    return;
  }

  const currentBalance = mainBalance - cashoutAmount;

  setInnerText(currentBalance);
});

// logout feature
document.getElementById("logout-btn").addEventListener('click', function(){
    window.location.href = './index.html';
});


// section toggle 
document.getElementById("add-money-area").addEventListener('click', function(){
  // toggle form
  toggleService("add-money-section");

  // active style
  activeStatus('add-money-area');
});

document.getElementById("cashout-area").addEventListener("click", function () {
  // toggle form
  toggleService("cashout-section");

  // active style
  activeStatus('cashout-area');
});

document.getElementById("transfer-money-area").addEventListener("click", function () {
  // toggle form
  toggleService("transfer-money-section");

  // active style
  activeStatus('transfer-money-area');
});

document.getElementById("get-bonus-area").addEventListener("click", function () {
  // toggle form
  toggleService("get-bonus-section");

  // active style
  activeStatus("get-bonus-area");
});

document.getElementById("pay-bill-area").addEventListener("click", function () {
  // toggle form
  toggleService("pay-bill-section");

  // active style
  activeStatus("pay-bill-area");
});

document.getElementById("transaction-area").addEventListener("click", function () {
  // toggle form
  toggleService("transaction-section");

  // active style
  activeStatus('transaction-area');
});