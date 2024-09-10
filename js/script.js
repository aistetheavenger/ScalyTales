// menu
fetch('menu.html')
.then(response => response.text())
.then(data => {
    document.getElementById('menu').innerHTML = data;
    
    var $body = $('body');
    
    $('.mobile-menu-icon').on('click', function(){
        console.log('btn clicked');
        $body.addClass('is-menu-open');
        return false;
    });
    
    $('.menu-close-btn').on('click', function(){
        $body.removeClass('is-menu-open');
        return false;
    });
    
    $('.nav-menu-mobile').on('click', function(){
        $body.removeClass('is-menu-open');
        return true;    
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
