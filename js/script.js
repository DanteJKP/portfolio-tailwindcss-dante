/// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

/// Navbar fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const FixdNav = header.offsetTop;

    if(window.pageYOffset > FixdNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }

}