$(document).ready(function () {
  slide();
});

function slide() {
  $(".homne__banner--slide").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    dots: true,
    infinite: true,
  });
}
