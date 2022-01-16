(function() {

    let slidesToShow = 2;

    const slides = [
        '<img src="img/photo-case1.jpg" alt"photo-case">',
        '<img src="img/photo-case2.jpg" alt"photo-case">',
        '<img src="img/photo-case4.jpg" alt"photo-case">',
        '<img src="img/photo-case5.jpg" alt"photo-case">',
        '<img src="img/photo-case6.jpg" alt"photo-case">',
        '<img src="img/photo-case8.jpg" alt"photo-case">',
    ];
    
    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.slide-show');
        switch (slidesToShow) {
            case 1:  slideContainer.innerHTML = slides[currentSlideIdx];
                     break;
            case 2: 
                    const nextSlideIdx = currentSlideIdx + 1 > slides.length ? 0 : currentSlideIdx +1;
                    slideContainer.innerHTML = slides[currentSlideIdx]
                    + slides[nextSlideIdx];
                    break;
            
        }
    }

    function nextSlide() {
        currentSlideIdx++;
        if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
        showCurrentSlide();
    }

    setInterval(nextSlide, 3000);
    showCurrentSlide();



})();





