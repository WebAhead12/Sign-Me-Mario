const clonePotetion = document.querySelector(".petitions").cloneNode(true);
document.querySelector(".petitions").remove();
allPetitions = document.querySelector(".allPetitions");
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
      child[0].innerHTML = `<a href=/p:${objArray.indexOf(obj)} >${
        obj.title
      }</a>`;
      child[1].innerHTML = "Owner: ".bold() + obj.name;
      child[2].innerHTML = "Description: ".bold() + obj.content;
      child[3].innerHTML = `<a href=/p:${obj.image_link} ></a>`;
      // child[4].value = "Goal: ".bold() + obj.goal;

      allPetitions.appendChild(newPeti);
    }
  })
  .catch((error) => {
    console.error(error);
  });
