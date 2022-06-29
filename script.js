"use strict";

const sliderImages = document.querySelectorAll(".slide-in");
console.log(sliderImages);

const handleSlide = function () {
  sliderImages.forEach((img) => {
    const slideAt = window.scrollY + window.innerHeight - img.height / 2;
    const imgBottom = img.offsetTop + img.height;
    const isHalfShown = slideAt > img.offsetTop;
    const isNotScrolledPast = window.scrollY < imgBottom;
    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    }
  });
};

const debounce = function (func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener("scroll", debounce(handleSlide));
