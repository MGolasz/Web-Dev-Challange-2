    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('#nav');
    const body = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        body.classList.toggle('scroll-lock');
    })

