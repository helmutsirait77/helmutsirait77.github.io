// variable 
const nav = document.querySelector('nav');
const linka = document.querySelectorAll('header nav a');
const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger .burger-line');
const containerMenu = document.querySelector('.nav-link');
 let sections = document.querySelectorAll('section');

// changed background nav scrolled
document.addEventListener("DOMContentLoaded", () => {
    // 1.Take navigation elements
    const navElement = document.querySelector('header nav');
    // Make sure the element is found
    if (!navElement) {
        console.warn("Elemen <nav> tidak ditemukan. Pastikan Anda memiliki tag <nav> di dalam <header>.");
        return;
    }
    // The name of the CSS class to be applied after scrolling.
    const scrolledClass = 'scrolled'; 
    // Scroll threshold value in pixels
    // After passing this distance, the navigation background will change.
    const scrollThreshold = 50; 
    // --- Function to handle background changes when scrolling ---
    function handleNavBackground() {
        // Check the vertical position of the scrolll
        if (window.scrollY > scrollThreshold) {
            // If it passes the threshold, add the class 'scrolled'
            // This will trigger a new color (background changes)
            navElement.classList.add('scrolled');
             containerMenu.classList.add('scrolled');
        for(let top = 0; top < linka.length; top++) {
             linka[top].classList.add('scrolled') 
        }  
        for(let top = 0; top < burgerLine.length; top++) {
                burgerLine[top].classList.add('scrolled') 
        }
        } else {
            navElement.classList.remove('scrolled');
            containerMenu.classList.remove('scrolled');
        for(let bottom = 0; bottom < linka.length; bottom++) {
             linka[bottom].classList.remove('scrolled') 
        }
        for(let bottom = 0; bottom < burgerLine.length; bottom++) {
                burgerLine[bottom].classList.remove('scrolled') 
        }
        }
    }
    window.addEventListener('scroll', handleNavBackground);
    handleNavBackground();
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

document.addEventListener("DOMContentLoaded", () => {
    // Fetch all relevant link elements in the navigation
    // take the main link inside the .nav-link, plus the 'hs' logo link
    const navLinksContainer = document.querySelector('.nav-link');
    const primaryNavLinks = navLinksContainer ? navLinksContainer.querySelectorAll('a') : [];
    const homeLink = document.querySelector('header nav > a[href="#home"]'); //
    // Combine all the links that need to be tracked
    const allNavLinks = [...(homeLink ? [homeLink] : []), ...primaryNavLinks];
    // Get all section elements that have an ID
    // Also add 'figure.hero#home' as this is the first part
    const sections = document.querySelectorAll('#home, #about, #projects, #contact');
    // Make sure the element is found before continuing.
    if (allNavLinks.length === 0 || sections.length === 0) {
        console.warn("Tidak dapat menemukan tautan navigasi atau bagian konten yang diperlukan.");
        return;
    }
    // --- Help Function for Managing Active Classes ---
    function removeActiveClass() {
        allNavLinks.forEach(link => {
            // Assuming your active class is 'active'
            link.classList.remove('active'); 
        });
    }
    allNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove the 'active' class from all links
            removeActiveClass();
            // Add the class 'active' to the newly clicked link
            event.currentTarget.classList.add('active');
        });
    });

    // --- scrolling page ---
    window.addEventListener('scroll', () => {
        let currentSectionId = ''; 
        // The offset distance from the top of the window, is adjusted to the height of your header.
        // If your header is fixed/sticky, use your header height + a little margin.
        // Assuming your header is around 80px tall.
        const headerOffset = 80; 
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Check if the scroll position is within this section
            if (window.scrollY >= sectionTop - headerOffset) {
                currentSectionId = section.getAttribute('id');
            }
        });
        // Apply the 'active' class to the appropriate links.
        removeActiveClass(); // Hapus dari semua
        allNavLinks.forEach(link => {
            const linkHref = link.getAttribute('href').substring(1); // Get ID (#home -> home)
            if (linkHref === currentSectionId) {
                link.classList.add('active');
            }
        });
    });
    // Optional: Set the first link to be active on load (if it is at the top)
    // Check if the page is at the top when loaded
    if (window.scrollY < 5) { 
        const homeLinkRef = allNavLinks.find(link => link.getAttribute('href') === '#home');
        if (homeLinkRef) {
            homeLinkRef.classList.add('active');
        }
    }
});