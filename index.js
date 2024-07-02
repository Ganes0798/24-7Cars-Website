document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.car-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slider.children.length;
    const intervalTime = 3000;

    function updateSlider() {
        const offset = -currentIndex * 350;
        slider.style.transform = `translate3d(${offset}px, 0, 0)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateSlider();
        resetAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
        resetAutoSlide();
    });

    function autoSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }

    let autoSlideInterval = setInterval(autoSlide, intervalTime);

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, intervalTime);
    }

    window.addEventListener('resize', updateSlider);
});
//zoom in

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function handleScroll() {
    const elements = document.querySelectorAll('.zoom-in');
    elements.forEach(element => {

            element.classList.add('zoom-in-visible');

    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();


document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector(".sticky-header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 30) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    });
});

//slide in left

function isSliderHandleLeft(leftSlide) {
    const rect = leftSlide.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollLeftHandler() {
    const elements = document.querySelectorAll('.slide-in-left');
    elements.forEach(element => {
        if (isSliderHandleLeft(element)) {
            element.classList.add('slide-in-left-visible');
        }
    });
}
window.addEventListener('scroll', scrollLeftHandler);
scrollLeftHandler();


//slide in right

function isSliderHandleRight(rightSlide) {
    const rect = rightSlide.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollRightHandler() {
    const elements = document.querySelectorAll('.slide-in-right');
    elements.forEach(element => {
        if (isSliderHandleRight(element)) {
            element.classList.add('slide-in-right-visible');
        }
    });
}
window.addEventListener('scroll', scrollRightHandler);
scrollRightHandler();


// fade slide up

function isSliderHandleUp(upSlider) {
    const rect = upSlider.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function scrollUpHandler() {
    const elements = document.querySelectorAll('.fade-slide-up');
    elements.forEach(element => {
        if (isSliderHandleUp(element)) {
            element.classList.add('fade-slide-up-visible');
        }
    });
}
window.addEventListener('scroll', scrollUpHandler);
scrollUpHandler();




let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.team-slides');
    const totalSlides = document.querySelectorAll('.team-slide').length;

    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showNextSlide, 3000);
});



