const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const btnEl = document.querySelectorAll(".btn");

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
for(let i = 0, len = btnEl.length; i < len; i++){
  btnEl[i].addEventListener("mouseover",(event)=>{
    const x = (event.pageX - btnEl[i].offsetLeft);
    const y = (event.pageY - btnEl[i].offsetTop);
    btnEl[i].style.setProperty("--xPos",x + "px");
    btnEl[i].style.setProperty("--yPos",y + "px");
  })
}

