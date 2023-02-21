'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting Element ----------------------------------------------------------------
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log('allSections OUTPUT : ',allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log('allButtons ', allButtons);


//Creating and inserting Element -----------------------------------------------------
// .insertAdjacentElement()

const message = document.createElement('div');
message.classList.add('cookie--message');
// message.textContent = `we use cookies to improve performance`
message.innerHTML = `we use cookies to improve performance <button class="btn btn--close-cookie">Got it!</button>`;

//-It will be insert at the end
// header.append(message);
//-It will be inserted at the top
header.prepend(message);
// header.prepend(message.cloneNode(true));

//-It will be insert before the header
// header.before(message);
//-It will be insert after the header
// header.after(message);

//Delete Element ----------------------------------------------------------------

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove()
})


//-Style ----------------------------------------------------------------
//-It will add the style to the header the created message element. the style will be added inline
message.style.backgroundColor = 'rgba(255, 255, 255,.2)';
message.style.width = '100%';
message.style.marginLeft = '67%';

// to get the style what style is added to the element
console.log(getComputedStyle(message).backgroundColor);