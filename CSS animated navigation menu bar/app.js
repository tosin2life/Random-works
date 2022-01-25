const navIcon = document.querySelector(".icon");
const menu = document.querySelector("nav");

navIcon.addEventListener("click", ()=>{
    navIcon.classList.toggle("open");
    menu.classList.toggle("show");
})