const form = document.querySelector("#newform");
// const input = document.querySelector(".number-input");
const fact = document.querySelector(".number-fact");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // to get the input value directly from the form, we can do this below. note:query must be included in the html input wiith attribute of  name
  const inputValue = form.elements.query.value;
  const loadText = "Wait a little bit ⌛";
  fact.innerHTML = loadText;
  const response = await axios.get(`http://numbersapi.com/${inputValue}`);
  const textData = response.data;
  fact.innerHTML = textData;
});
