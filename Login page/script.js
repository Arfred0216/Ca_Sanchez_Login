



function Error(){
  event.preventDefault();
  const usernameInput = document.getElementById("UN").value; 
  const passwordInput = document.getElementById("PW").value; 

  let message;
  if (usernameInput === '' && passwordInput === '') {
    message = 'Please enter your username and password.';
    console.log("Login error")
  } else if (usernameInput === '') {
    message = 'Please enter your username.';
    console.log("Login error")
  } else if (passwordInput === '') {
    message = 'Please enter your password.';
    console.log("Login error")
  } else{
    message = ""
  }

  document.getElementById("DP").innerHTML = message;
}