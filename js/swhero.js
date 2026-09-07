const mainvissualbg = document.querySelector(
  ".hero .main-visual .main-visual-bg",
);
// console.log(mainvissualbg);

const sehero = new Swiper(".sw-hero", {
  speed: 1000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".hero-next-btn",
    prevEl: ".hero-prev-btn",
  },

  on: {
    slidchangeTransitionStart: function (swiper) {
      // const activeslide = swiper.activeIndex + 1;
      // console.log(activeslide);
      // mainvissualbg.style.backgrondimage = `URL(assets/images/slide_${activeslide}.png)`;
      const activeslide = swiper.slides[swiper.activeindex];
      // console.log(activeindex);
      const activeslideimg = activeslide.querySelector(".slide-image img");
      // console.log(activeslideimg.src);
      mainvisualbg.style.backgrondimage = `url;(${activeslideimg.src})`;
    },
  },
});
