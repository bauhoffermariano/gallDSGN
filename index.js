const navLogo= document.getElementById('nav__btn');
const toggleClass= function (){
    navLogo.classList.toggle('desplegable');
}

navLogo.addEventListener('click', toggleClass())

console.log('hola')