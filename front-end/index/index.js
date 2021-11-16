fetch("/all-petitions")
  .then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error(error);
  });
