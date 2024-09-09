// menu
fetch('menu.html')
.then(response => response.text())
.then(data => {
    document.getElementById('menu').innerHTML = data;
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenuIcon.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
    
});

// carousel 
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    
    // Duplicate the carousel items to create the infinite loop effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });
    
    const totalWidth = carousel.scrollWidth / 2; // Width of the original items
    
    function setCarouselSpeed(){
        const isMobile = window.matchMedia('(max-width: 768px').matches;
        const speed = isMobile ? 60 : 60; //set speed for mobile and desktop
        
        gsap.to(carousel, {
            x: -totalWidth,
            duration: speed, // Adjust speed as needed
            ease: "linear",
            repeat: -1,
            overwrite: 'auto' //ensure animation is updated
        });
    }
    
    setCarouselSpeed();
    
    window.addEventListener('resize', setCarouselSpeed);
});

// modal
function openModal(src) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

