// variable 
const darkBtn = document.querySelector('.toggle');
const spanBtn = document.querySelector('.toggle span');
const nav = document.querySelector('nav');
const linka = document.querySelectorAll('nav a');
const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger .burger-line');
const containerMenu = document.querySelector('.nav-link');
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
        for(let top = 0; top < burgerLine.length; top++) {
                burgerLine[top].classList.add('scrolled') 
        }
    } else {
        nav.classList.remove('scrolled');
        for(let bottom = 0; bottom < linka.length; bottom++) {
        	    linka[bottom].classList.remove('scrolled') 
        }
        for(let bottom = 0; bottom < burgerLine.length; bottom++) {
                burgerLine[bottom].classList.remove('scrolled') 
        }
    }
});
// burger button
burger.addEventListener('click', function () {
      burger.classList.toggle('burger-active');
      containerMenu.classList.toggle('open-nav');
       document.body.classList.toggle('hide-screen');
})
// smooth scrool clik the link
for( let i = 0; i < linka.length; i++ ){
         linka[i].addEventListener('click', function(event) {
                // call the smoothScroll function
               function smoothScroll(event) {
                   event.preventDefault();
                    // approach #2 - element-scollIntoView()
                  // approach #3 - window.requestAnimationFrame()
                   const targetId = event.currentTarget.getAttribute('href') === '#' ? 'header' :  event.currentTarget.getAttribute('href');
                   const duration = 1000;
                   const targetPosition = document.querySelector(targetId).offsetTop;
                   const startPosition = window.pageYOffset;
                   const distance = targetPosition - startPosition;
                  
                  let start = null;
                  window.requestAnimationFrame(step);
                  
                  function step(timestamp) {
                    if( !start ) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(0, isInOutQuadCubic(progress, startPosition, distance, duration));
                    if( progress < duration) window.requestAnimationFrame(step);
                     function isInOutQuadCubic(t, b, c, d) {
                          t /= d / 2;
                          if( t < 1 ) return c / 2 * t * t * t + b;
                          t -= 2
                          return c / 2 * (t * t * t + 2) + b; 
                      }
                  }
               } 
               smoothScroll(event);
               if( containerMenu.classList.contains('open-nav')) {
                  burger.click();
               }
         });
    }