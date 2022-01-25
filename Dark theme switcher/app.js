const input = document.querySelector(".theme-switcher input");

input.addEventListener("change", (evt) => {
  // console.dir(evt);
  if (evt.target.checked) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
});
