// Hamburger Menu Functionaity
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

// FAQ dropdowwn Functionality
let question = document.getElementsByClassName('question');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', () => {
    question[i].classList.toggle('reveal')
  })
  
}


