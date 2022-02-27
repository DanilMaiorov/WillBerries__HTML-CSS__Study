export const sliderSwiper = () => {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
        delay: 7500,
        disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
      });
}
