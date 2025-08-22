document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    
    const userNumber = document.getElementById("phone-number").value.trim();
    const convertNumber = Number(userNumber);
    const userPin = document.getElementById('pin').value.trim();
    const convertPin = Number(userPin);

    if(convertNumber === mobileNumber && convertPin === pinNumber){
        window.location.href = "./home.html";
    }
    else{
        window.alert("Invalid Credentials");
    }
})
