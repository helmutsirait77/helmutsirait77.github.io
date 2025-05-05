// hamburger menu 
let hamMenu = document.querySelector('#menu');
let nav = document.querySelector('nav');

hamMenu.addEventListener('click', function() {
      hamMenu.classList.add('x-menu');
      

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
}