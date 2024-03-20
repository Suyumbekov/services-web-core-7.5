let imgs = document.querySelectorAll(".brands__item");

const moreBtn = document.querySelector(".more");

toggleBrands(imgs);
window.addEventListener("resize", () => {
  if (innerWidth <= 320) {
    moreBtn.style.display = "none";
    showSlides(slideIndex);
  } else toggleBrands(imgs);
});

function toggleBrands(arr) {
  arr.forEach((img, i) => {
    if (innerWidth > 768) {
      if (i > 7) {
        img.classList.add("brands__item--hide");
      } else img.classList.remove("brands__item--hide");
    } else {
      if (i > 5) {
        img.classList.add("brands__item--hide");
      } else img.classList.remove("brands__item--hide");
    }
  });
}

moreBtn.addEventListener("click", () => {
  let hideItem = document.querySelectorAll(".brands__item--hide");

  if (hideItem.length > 0) {
    hideItem.forEach((item) => {
      item.classList.remove("brands__item--hide");
    });
    document.querySelector(".more__img").src = "./img/hide.svg";
    document.querySelector(".more__text").textContent = "Скрыть";
  } else {
    toggleBrands(imgs);
    document.querySelector(".more__img").src = "./img/expand.svg";
    document.querySelector(".more__text").textContent = "Показать все";
  }
});

let slideIndex = 1;

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("brands__item");
  let dots = document.getElementsByClassName("dot");
  let prevIndex = slideIndex;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    if (dots[i].className.includes("active")) prevIndex = i;
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  console.log(prevIndex);
  // Determine animation direction
  if (slideIndex - 1 < prevIndex) {
    slides[slideIndex - 1].classList.add("left");
    slides[slideIndex - 1].classList.remove("right");
  } else {
    slides[slideIndex - 1].classList.add("right");
    slides[slideIndex - 1].classList.remove("left");
  }
}
