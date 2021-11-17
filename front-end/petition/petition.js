const data = new URLSearchParams(window.location.href.split("?")[1]);
const id = data.get("id");
console.log(id)
fetch(`/p/${id}`)
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((json) => {
    console.log(json)
  });
