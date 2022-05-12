// welcome arrow scroll 

const scrollBtn = document.getElementById('scrollBtn');

scrollBtn.addEventListener('click', clickHandler);

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

const mobileBtn = document.getElementById('mobileBtn')
const nav = document.querySelector('nav')

mobileBtn.addEventListener('click', openMobileNav)

function openMobileNav() {
  nav.classList.toggle('active')
  mobileBtn.classList.toggle('clicked')
}