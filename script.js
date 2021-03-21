    const hamburger = document.querySelector('#hamburger');
    const nav = document.querySelector('#nav');
    const body = document.querySelector('body');
    const img = document.querySelector('#hamburger-icon');
    

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        body.classList.toggle('scroll-lock');

        if (img.src.match('/img/fi-rr-align-justify.svg')) {
            img.src = '/img/fi-rr-cross.svg';
        }
        else {
            img.src = '/img/fi-rr-align-justify.svg';
        }
    })

