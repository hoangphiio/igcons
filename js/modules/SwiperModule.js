export default function SwiperModule() {
  var bannerImg = document.querySelectorAll(".img-small");
  var menu = [];
  bannerImg.forEach((item) => {
    menu.push(item.innerHTML);
  });
  console.log(menu);
  console.log(bannerImg);
  var banner = new Swiper(".swiper-banner", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1200,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    watchSlidesProgress: true,

    pagination: {
      el: ".banner .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' + className + ' inner-img">' + menu[index] + "</div>"
        );
      },
    },

    slidesPerView: 1,
  });

  var wallpaperImg = document.querySelectorAll(".img-wallpaper");
  var menuimg = [];
  wallpaperImg.forEach((item) => {
    menuimg.push(item.innerHTML);
  });
  const swiper_wallpaper = new Swiper(".swiper-wallpaper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 2000,
    watchSlidesProgress: true,

    slidesPerView: 1,
    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: ".wallpaper .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<div class="' + className + ' box-img">' + menuimg[index] + "</div>"
        );
      },
    },
    navigation: {
      prevEl: ".button-next",
      nextEl: ".button-pre",
    },
  });
  const swiperNews = new Swiper(".swiper-news", {
    autoplay: {
      delay: 3000,
    },
    speed: 1200,
    slidesPerView: 3,
    navigation: {
      prevEl: ".btn-news-next",
      nextEl: ".btn-news-pre",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  const swiperPost = new Swiper(".swiper-post", {
    // Optional parameters
    speed: 1200,
    grabCursor: true,
    // If we need pagination
    autoplay: {
      delay: 3000,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".btn-post-next",
      prevEl: ".btn-post-prev",
    },
    slidesPerView: 1,
    // And if we need scrollbar
  });
  const swiperDeign = new Swiper(".swiper-design", {
    // Optional parameters

    grabCursor: true,
    // If we need pagination
    // autoplay: {
    //     delay: 3000,
    // },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 2000,
    // Navigation arrows
    navigation: {
      nextEl: ".btn-design-next",
      prevEl: ".btn-design-prev",
    },
    slidesPerView: 1,
    // And if we need scrollbar
  });
  const swiperPrice = new Swiper(".swiper-price", {
    // Optional parameters
    speed: 1200,
    grabCursor: true,
    // If we need pagination
    // autoplay: {
    //     delay: 3000,
    // },
    slidesPerView: 3,
    autoplay: {
      delay: 1500,
    },
    breakpoints: {
      0: {
        // autoplay: {
        //     delay: 1500,
        // },
        slidesPerView: 1,
        centeredSlides: true,

        //   spaceBetween: 40
      },

      320: {
        // autoplay: {
        //     delay: 1500,
        // },
        slidesPerView: 1,
        centeredSlides: true,

        //   spaceBetween: 40
      },
      600: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 2.5,
      },

      1200: {
        slidesPerView: 3,
      },
    },

    // And if we need scrollbar
  });
  const swiper_build_banner = new Swiper(".swiper-build-banner", {
    // Optional parameters
    speed: 1200,
    grabCursor: true,
    // If we need pagination
    // autoplay: {
    //     delay: 3000,
    // },

    // Navigation arrows

    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 2,
        //   spaceBetween: 40
      },
      1200: {
        slidesPerView: 1.5,
      },
    },
    // And if we need scrollbar
  });
}
