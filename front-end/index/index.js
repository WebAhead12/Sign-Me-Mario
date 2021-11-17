const clonePotetion = document.querySelector(".petitions").cloneNode(true);
document.querySelector(".petitions").remove();
const allPetitions = document.querySelector(".allPetitions");
const logOut = document.querySelector(".logOut");
const logIn = document.querySelector(".logIn");
const welcome = document.querySelector(".welcome");

if (document.cookie) {
  logOut.style.display = "block";
  logIn.style.display = "none";
  welcome.innerHTML = "You are logged In";
}
if (!document.cookie) {
  logOut.style.display = "none";
  logIn.style.display = "block";
  welcome.innerHTML = "";
}

fetch("/all-petitions")
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((json) => {
    const objArray = json;
    console.log(json);
    for (let obj of objArray) {
      let newPeti = clonePotetion.cloneNode("true");
      let child = newPeti.children;
      child[0].innerHTML = `<a href=/petition?id=${obj.id} >${obj.title}</a>`;
      child[1].innerHTML = "Owner: ".bold() + obj.name;
      child[2].innerHTML = "Description: ".bold() + obj.content;
      child[3].innerHTML = `<img src=${obj.image_link} width="250px" height="300px"></img>`;
      // child[4].value = "Goal: ".bold() + obj.goal;

      allPetitions.appendChild(newPeti);
    }
  })
  .catch((error) => {
    console.error(error);
  });

logOut.addEventListener("click", () => {
  document.cookie = "user_id= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  logOut.style.display = "none";
  logIn.style.display = "block";
  welcome.innerHTML = "";
});
