const data = new URLSearchParams(window.location.href.split("?")[1]);
const id = data.get("id");
const petition = document.querySelector(".petition");

fetch(`/p/${id}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((json) => {
    console.log(json);
    const objArray = json;
    for (let obj of objArray) {
      let child = petition.children;
      child[0].innerHTML = obj.title;
      child[1].innerHTML = "Owner: ".bold() + obj.name;
      child[2].innerHTML = "Description: ".bold() + obj.content;
      child[3].innerHTML = `<img src=${obj.image_link} width="250px" height="300px"></img>`;
      child[4].textContent = `Goal:${obj.signed} out of ${obj.goal}`;
      
    }
  })
  .catch((error) => {
    console.error(error);
  });
