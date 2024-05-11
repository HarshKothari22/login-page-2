const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');


form.addEventListener('submit',(e)=>
{
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   // var email_check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(name.value === '' || name.value == null){
        e.preventDefault();
        name_error.innerHTML = '*Name is required';
    }
    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerHTML = '*Valid E-mail is required';
    }
    if(password.value.length <= 8){
        e.preventDefault();
        pass_error.innerHTML = '*Password must be more than 7 characters';
    } 
    if(password.value.length >= 20){
        e.preventDefault();
        pass_error.innerHTML = '*Password must be less than 20 characters';
    }
    if(password.value === 'password' || password.value === 'Password'){
        e.preventDefault();
        pass_error.innerHTML = '*Password can not be password/Password';
    }
  
});