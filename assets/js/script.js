// variable 
const darkBtn = document.querySelector('.toggle');
const spanBtn = document.querySelector('.toggle span');
const nav = document.querySelector('nav');
const linka = document.querySelectorAll('nav a');
const burger = document.querySelector('.burger');
const containerMenu = document.querySelector('.container-menu');
// Dark mode Button
darkBtn.addEventListener('click', function () {
	    spanBtn.classList.toggle('active-span');
});
// change background navigation to scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 20) { 
        nav.classList.add('scrolled');
        for(let top = 0; top < linka.length; top++) {
        	    linka[top].classList.add('scrolled') 
        }
    } else {
        nav.classList.remove('scrolled');
        for(let bottom = 0; bottom < linka.length; bottom++) {
        	    linka[bottom].classList.remove('scrolled') 
        }
    }
});
// burger button

burger.addEventListener('click', function () {
      burger.classList.toggle('burger_active');
      // containerMenu.classList.toggle('open-container');
      //  document.body.classList.toggle('hide-screen');
})