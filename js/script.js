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
    const toTap = document.querySelector('#to-tap');

    if(window.pageYOffset > FixdNav) {
        header.classList.add('navbar-fixed');
        toTap.classList.remove('hidden');
        toTap.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed')
        toTap.classList.remove('flex');
        toTap.classList.add('hidden');
    }

};

///Click luar hamburger

window.addEventListener('click', function (e) {

    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');   
    }

});


