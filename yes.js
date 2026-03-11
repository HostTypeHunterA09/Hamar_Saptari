
    let index = 0;
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");
    const total = dots.length;

    function moveSlide(n) {
        index = n;
        updateSlider();
    }

    function autoSlide() {
        index = (index + 1) % total;
        updateSlider();
    }

    function updateSlider() {
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Add click events to dots
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => moveSlide(i));
    });

    setInterval(autoSlide, 4000);