var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Mobile
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // Tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // Desktop maior
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});