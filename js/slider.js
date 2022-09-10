const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = Array.from(document.querySelectorAll(".dot"));

let slideIndex = 1;

function plusSlides(e) {
  let num;

  if (e.target === prevBtn) {
    num = -1;
  } else if (e.target === nextBtn) {
    num = 1;
  }
  showSlides((slideIndex += num));
}
console.log(plusSlides);

function currentSlider(e) {
  if (e.target === dots[0]) {
    showSlides((slideIndex = 1));
  } else if (e.target === dots[1]) {
    showSlides((slideIndex = 2));
  } else if (e.target === dots[2]) {
    showSlides((slideIndex = 3));
  }
}

function showSlides(n) {
  const slides = Array.from(document.querySelectorAll(".slider-pres"));

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => slide.classList.remove("is-active"));
  dots.forEach((dot) => dot.classList.remove("is-active"));

  slides[slideIndex - 1].classList.add("is-active");
  dots[slideIndex - 1].classList.add("is-active");
}

prevBtn.addEventListener("click", plusSlides);
nextBtn.addEventListener("click", plusSlides);
dots.forEach((dot) => dot.addEventListener("click", currentSlide));
