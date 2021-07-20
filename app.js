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

 // get the form element from dom
 const formElement = document.getElementById('tellMe')

 // convert the form to JSON
 const getFormJSON = (form) => {
   const data = new FormData(form);
   return Array.from(data.keys()).reduce((result, key) => {
     result[key] = data.get(key);
     return result;
   }, {});
 };

 // handle the form submission event, prevent default form behaviour, check validity, convert form to JSON
 const handler = (event) => {
   event.preventDefault();
   const email = document.getElementById("email").value;
   const recommendation = document.getElementById("recommendation").value;
   const name = document.getElementById("name").value;

   const valid = formElement.reportValidity();
   if (valid) {
     fetch("http://127.0.0.1:8000/post-form", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
     body: JSON.stringify({
       name: name,
       email: email,
       recommendation: recommendation,
     }),
   });
 }
}
 
 formElement.addEventListener("submit", handler);