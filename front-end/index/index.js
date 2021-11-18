const clonePotetion = document.querySelector(".petitions").cloneNode(true);
document.querySelector(".petitions").remove();
const allPetitions = document.querySelector(".allPetitions");
const logOut = document.querySelector(".logOut");
const logIn = document.querySelector(".logIn");
const welcome = document.querySelector(".welcome");


//if user is signed in show log-out
if (document.cookie) {
  logOut.style.display = "block";
  logIn.style.display = "none";
  welcome.innerHTML = "You are logged In";
} //else show sign in
if (!document.cookie) {
  logOut.style.display = "none";
  logIn.style.display = "block";
  welcome.innerHTML = "";
}


//fetches the data of all the petitions that are in
fetch("/all-petitions")
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((json) => {
    const objArray = json;
    console.log(json);
    //clones petitons from the html page to create a clone for petitions
    for (let obj of objArray) {
      //gives each petition name and title
      let newPeti = clonePotetion.cloneNode("true");
      let child = newPeti.children;
      child[0].innerHTML =
        `<a href=/petition?id=${obj.id}>${obj.title}</a>`.bold();
      child[1].innerHTML = "Owner: ".bold() + obj.name;
      child[2].innerHTML = "Description: ".bold() + obj.content;
      child[3].innerHTML = `<img src=${obj.image_link} width="200px" height="250x"></img>`;
      child[4].textContent = `Goal:${obj.signed} out of ${obj.goal}`;


      allPetitions.appendChild(newPeti); 
      newPeti.addEventListener("click",(event)=>{
        window.location.href = `http://localhost:3000/petition?id=${obj.id}`
      })
      newPeti.style.cursor = "pointer";
    }
  })
  .catch((error) => {
    console.error(error);
  });

//logout deletes cookie
logOut.addEventListener("click", () => {
  document.cookie = "user_id= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  logOut.style.display = "none";
  logIn.style.display = "block";
  welcome.innerHTML = "";
});
