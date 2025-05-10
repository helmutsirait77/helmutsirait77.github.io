// hamburger menu 
let hamMenu = document.getElementById('menu');
let nav = document.querySelector('nav');

hamMenu.addEventListener('click', function() {
      hamMenu.classList.toggle('active');
      nav.classList.toggle('active');
}); 

// scroll sections active links 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header a');

window.onscroll = function() {
	 sections.forEach(function(sec) {
           let top = window.scrollY;
           let offset = sec.offsetTop - 150;
           let height = sec.offsetHeight;
           let id = sec.getAttribute('id');

           if( top >= offset && top < offset + height ) {
               navLinks.forEach(function(links) {
                       links.classList.remove('active');
                       document.querySelector('header  a[href*='+ id +']').classList.add('active');
               });
           }; 
	 });
     // sticky navbar 
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);

     // remove toggle icon and navbar when click navbar link (scroll)
      hamMenu.classList.remove('active');
      nav.classList.remove('active');

      
}   
  
// typed js 
const typed = document.querySelector('.multiple-text');
const toType = ['Frontend Developer', 'Web Design', 'Blogger'];

const delayTypingChar = 100;
const delayErasingText = 100;
const delayTypingText = 1000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
   if (charIndex < toType[totypeIndex].length) {
      typed.textContent += toType[totypeIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, delayTypingChar);
   }
   else {
      setTimeout(eraseText, delayTypingText);
   }
}

function eraseText() {
   if (charIndex > 0) {
      typed.textContent = toType[totypeIndex].substring(0, charIndex-1);
      charIndex = charIndex-1;
      setTimeout(eraseText, delayErasingText);
   }
   else {
      totypeIndex++;

      if (totypeIndex >= toType.length)
         totypeIndex = 0;
         setTimeout(typeText, delayTypingText);
   }
}

window.onload = function() {
   if (toType[totypeIndex].length) setTimeout(typeText, delayTypingText);
}   
