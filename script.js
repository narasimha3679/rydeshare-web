let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

const nextSlide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
};

// Automatically change slide every 5 seconds
setInterval(nextSlide, 50000);
