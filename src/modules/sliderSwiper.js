export const sliderSwiper = () => {
    /* подключаем свайпер через CDN в конце разметки */
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        },
      });
}
