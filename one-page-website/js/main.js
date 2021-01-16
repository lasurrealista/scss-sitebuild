'use strict';

const navbar = document.querySelector('.nav');
let sticky = navbar.offsetTop;

window.onscroll = function() {
  stickMenu()
};

function stickMenu() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}
