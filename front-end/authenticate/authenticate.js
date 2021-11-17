let error = window.location.search;

if (error == "?error=incorrect") {
  setTimeout(() => {
    alert("Incorrect Login Information!");
  }, 100);
}
if (error == "?message=dumbass") {
  setTimeout(() => {
    alert("Username already exists!");
  }, 100);
}
if (error == "?message=success") {
  setTimeout(() => {
    alert("Account created please log in!");
  }, 100);
}

if (error == "?error=no") {
  setTimeout(() => {
    alert("Please Log-In");
  }, 100);
}
// if(error) window.location.href = "/authenticate"
