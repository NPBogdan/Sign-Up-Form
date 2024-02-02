document.querySelector("#submit").addEventListener('click',function(e){
    let password = document.querySelector('#password').value;
    let passwordConfirmation = document.querySelector('#passwordConfirmation').value;

    if(password != passwordConfirmation){
        let passwordConfirmation1 = document.querySelector('#passwordConfirmationContainer');
        let i = document.createElement('i');
        i.textContent = "*Passwords do not match";
        i.style.fontSize = '.8em';
        passwordConfirmation1.appendChild(i);
        e.preventDefault();
    }
    else{
        let passwordConfirmation1 = document.querySelector('#passwordConfirmationContainer');
        passwordConfirmation1.removeChild('i');
        passwordConfirmation1.appendChild(i);
    }
})

