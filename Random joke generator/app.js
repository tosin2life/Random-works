const button = document.querySelector("#button");
const p = document.querySelector(".paragraph");

const getDadJokes = async () => {
  const config = { headers: { Accept: "application/json" } };
  const response = await axios.get("https://icanhazdadjoke.com/", config);
  const joke = response.data.joke;
  p.innerHTML = joke;
};
button.addEventListener("click", getDadJokes);
document.addEventListener("DOMContentLoaded", getDadJokes);




