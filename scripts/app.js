$(".category-slide").slick({
  slidesToShow: 6,
  infinite: false,
  slidesToScroll: 1,
  dots: false,
  draggable: false,
  adaptiveHeight: false,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="../image/arrow -left.png"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="../image/arrow-right.png"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        draggable: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        draggable: true,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
