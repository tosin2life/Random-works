const readMore = document.querySelector(".btn");
const text = document.querySelector (".text");

readMore.addEventListener("click", (e)=>{
text.classList.toggle("more-text");
if (readMore.innerHTML === "Read More"){
readMore.innerHTML = "Read Less"
}
else{
    readMore.innerHTML = "Read More"
}
})