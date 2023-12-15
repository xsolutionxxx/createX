const promo = new Swiper(".header-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  
  pagination: {
    el: ".header-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (`0${index + 1}`) + "</span>";
    },
  },
  
  navigation: {
    nextEl: ".header-button-next",
    prevEl: ".header-button-prev",
  },
});

const tabs = new Swiper(".new__products-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".new__products-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 6
    },
  },
});

const trending = new Swiper(".trending-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  },
  navigation: {
    nextEl: ".trending-btn-next",
    prevEl: ".trending-btn-prev",
  },
});

const sale = new Swiper(".sale-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  },
  navigation: {
    nextEl: ".sale-btn-next",
    prevEl: ".sale-btn-prev",
  },
});