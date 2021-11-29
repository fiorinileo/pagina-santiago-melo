const menu = document.querySelector(".nav-menu");
const openMenu = document.querySelector(".nav-open-menu");
const closeMenu = document.querySelector(".nav-close-menu");

function toggleMenu(){
	menu.classList.toggle("menu_opened");
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

