const navbar = document.querySelector('#navbar');
const navbarCall = document.querySelector('#navbar_call');
navbar.addEventListener('click', () => {navbar.style.top= '-15vh';});
navbarCall.addEventListener('click', () => {navbar.style.top= '0vh';});