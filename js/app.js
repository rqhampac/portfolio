const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const btnEls = document.querySelectorAll(".btn");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

//button ripple effect
btnEls.forEach(btnEl=>{
  btnEl.addEventListener("mouseover",e =>{
    const x = e.offsetX;
    const y = e.offsetY;
    btnEl.style.setProperty("--xPos",x + "px");
    btnEl.style.setProperty("--yPos",y + "px");
  })
})