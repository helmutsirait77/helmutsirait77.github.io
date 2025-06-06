 
let hamMenu = document.getElementById('menu');
let nav = document.querySelector('nav');
const header = document.querySelector('header');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header a');
let revealRight = document.querySelectorAll('.reveal-right');
let revealLeft = document.querySelectorAll('.reveal-left');
const elementhtml = document.querySelector('html');


// hamburger menu
hamMenu.addEventListener('click', function() {
      hamMenu.classList.toggle('active');
      nav.classList.toggle('active');
      header.classList.toggle('active');
      document.body.classList.toggle('hide');
      elementhtml.classList.toggle('hide');
     
     
}); 

// scroll sections active links 
window.addEventListener('scroll', function() {
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
      header.classList.remove('active');
      elementhtml.classList.remove('hide');
       

     const windowHeight = window.innerHeight; 
     const elementVisible = 150;

    for( let rl = 0; rl < revealLeft.length; rl++ ) {
            const revealTopLeft = revealLeft[rl].getBoundingClientRect().top;
             (revealTopLeft < windowHeight - elementVisible) ? revealLeft[rl].classList.add('active') : revealLeft[rl].classList.remove('active');
       } 
     
    // reveal aniamtion section
    for( let rr = 0; rr < revealRight.length; rr++ ) {
            const revealTopRight = revealRight[rr].getBoundingClientRect().top;
             (revealTopRight < windowHeight - elementVisible) ? revealRight[rr].classList.add('active') : revealRight[rr].classList.remove('active');
       } 


}); 
  
// smooth scroll 
navLinks.forEach(function (i) {
       i.addEventListener("click", (event) => {
              event.preventDefault();
              const targetId = event.currentTarget.getAttribute("href");
              const duration = 1000;
              let targetPosition = document.querySelector(targetId).offsetTop;
              let startPosition = window.pageYOffset;
              let distance = targetPosition - startPosition;
              let start = null;

              const step = function(timeStamp) {
                  if( !start ) start = timeStamp;
                  const progress = timeStamp - start;

                  window.scrollTo(0, isInOutQuadCubic(progress, startPosition, distance, duration));
                  if( progress < duration ) window.requestAnimationFrame(step);

                  function isInOutQuadCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t * t + b;
          t -= 2;
          return (c / 2) * (t * t * t + 2) + b;
        }
              }

              window.requestAnimationFrame(step)

       })
})