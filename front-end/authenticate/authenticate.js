let error = new URLSearchParams(window.location.search.split("?")[1]);
console.log(error.get("message"));
if (error.has("message")) {
  setTimeout(() => {
    alert(error.get("message").split("_").join(" "));
  }, 100);
}
