// regex for email validation 
var email = document.getElementById('email');
var emailErrPara = document.getElementById('emailError');

email.addEventListener('input', function(e){
 
  var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var currentValue = e.target.value;
  var valid = pattern.test(currentValue);

  if (valid){
    emailErrPara.style.display = 'none'
  } else {
    emailErrPara.style.display = 'block'
  }
 
});
