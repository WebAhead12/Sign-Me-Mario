const data = new URLSearchParams(window.location.href.split("?")[1]);
const id = data.get("id");
const petition = document.querySelector(".petition");
const petitionId = document.getElementById("petition_id");
const title = document.querySelector(".title");
const owner = document.querySelector(".owner");
const image_link = document.querySelector(".image_link");
const content = document.querySelector(".content");
const goal = document.querySelector(".goal");

console.log(1);

//fetches the petition id to get data
fetch(`/p/${id}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  //inserts data to the petiton
  .then((json) => {
    petitionId.value = id;
    console.log(petitionId.value);
    const objArray = json;
    for (let obj of objArray) {
      let child = petition.children;
      title.innerHTML = obj.title;
      owner.innerHTML = "Owner: ".bold() + obj.name;
      content.innerHTML = "Description: ".bold() + obj.content;
      image_link.innerHTML = `<img src=${obj.image_link} width="250px" height="300px"></img>`;
      goal.textContent = `Goal: ${obj.signed} / ${obj.goal}`;
    }
  })
  .catch((error) => {
    console.error(error);
  });
