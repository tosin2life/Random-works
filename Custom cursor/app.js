const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
 // console.log(e.pageX, e.pageY);
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
  cursor.setAttribute("value-fromTop", (cursor.offsetTop - scrollY));
});

window.addEventListener("scroll", (evt) => {
  //console.log(evt);
  const getTop = parseInt(cursor.getAttribute("value-fromTop"));
  cursor.style.top = scrollY + getTop + "px";
});

window.addEventListener("click", ()=>{
  if (cursor.classList.contains("click")){
    cursor.classList.remove("click") 
    void cursor.offsetWidth;
    cursor.classList.add("click")
   }
else(cursor.classList.add("click"))  
  // console.log("works")
})