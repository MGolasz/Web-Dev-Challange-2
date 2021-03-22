const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav');
const body = document.querySelector('body');
const img = document.querySelector('#hamburger-icon');
const navLink = document.querySelectorAll('.nav-link');
console.log(typeof Array.from(navLink));

const burgerChange = () => {
    if (nav.classList.contains('show')) {
        img.src = '/img/fi-rr-cross.svg';
    }
    else {
        img.src = '/img/fi-rr-align-justify.svg';
    }
}

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    body.classList.toggle('scroll-lock');
    burgerChange();
})

navLink.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('scroll-lock');
        nav.classList.remove('show');
        burgerChange();
    })}
);
    
    


