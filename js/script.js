//Burger
const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.toggle('_active');
      menu.classList.toggle('_active');
    })
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('_active');
      burger.classList.remove('_active');
      body.classList.remove('_lock');
    })
  })
}

//Swiper
const swiper = new Swiper('.swiper-main', {
  // Navigation arrows
  // slidesPerView: 'auto',
  slidesPerView: 4.8,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  mousewheel: {
    sensitivity: 1,
  },

  breakpoints: { 
    320: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2.5,
    },
    800: {
      slidesPerView: 2.8,
    },
    1000: {
      slidesPerView: 2.9,
    },
    1180: {
      slidesPerView: 3.3,
    },
    1300: {
      slidesPerView: 3.8,
    },
    1400: {
      slidesPerView: 4,
    },
    1580: {
      slidesPerView: 4.2,
    },
    1700: {
      slidesPerView: 4.8,
    },
  }
});

