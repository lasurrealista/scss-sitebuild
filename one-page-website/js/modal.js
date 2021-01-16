'use strict';

const modal = document.querySelector('.modal');

const modalPrivacy = document.querySelector('.modal-privacy');
const modalTerms = document.querySelector('.modal-terms');
const modalFaq = document.querySelector('.modal-faq');

const buttonOpenPrivacy = document.querySelector('.modal__open-privacy');
const buttonOpenTerms = document.querySelector('.modal__open-terms');
const buttonOpenFaq = document.querySelector('.modal__open-faq');

const buttonsClosePrivacy = document.querySelectorAll('.modal__close-privacy');
const buttonsCloseTerms = document.querySelectorAll('.modal__close-terms');
const buttonsCloseFaq = document.querySelectorAll('.modal__close-faq');

buttonOpenPrivacy.addEventListener('click', () => {
  modalPrivacy.classList.add('modal__visible');
  buttonClose.focus();
});

buttonOpenTerms.addEventListener('click', () => {
    modalTerms.classList.add('modal__visible');
    buttonClose.focus();
  });

buttonOpenFaq.addEventListener('click', () => {
    modalFaq.classList.add('modal__visible');
    buttonClose.focus();
  });

buttonsClosePrivacy.forEach(button => button.addEventListener('click', () => {
    modalPrivacy.classList.remove('modal__visible');
  }));

buttonsCloseTerms.forEach(button => button.addEventListener('click', () => {
    modalTerms.classList.remove('modal__visible');
  }));

buttonsCloseFaq.forEach(button => button.addEventListener('click', () => {
    modalFaq.classList.remove('modal__visible');
  }));

window.onclick = function(event) {
    if (event.target == modalPrivacy) {
    modalPrivacy.classList.remove('modal__visible')
    } 
    else if (event.target == modalTerms) {
        modalTerms.classList.remove('modal__visible'); 
    }
    else if (event.target == modalFaq) {
        modalFaq.classList.remove('modal__visible'); 
  }
};
