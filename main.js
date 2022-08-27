const iconHamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".nav-list")

iconHamburger.addEventListener("click", ()=>{
    menu.classList.toggle('showNav')
})