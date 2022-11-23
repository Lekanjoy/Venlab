const hamburgerMenu = document.getElementById('hamburger');
const mobileMenu = document.getElementById('menu')


hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
})

window.addEventListener("click", (e) => {
  if (e.target.id !== "hamburger" && e.target.id !== "menu") {
    mobileMenu.classList.remove("show");
  }
});

