//文字コードはutf-8

$(function(){
  $(".ham").click(function () {
    $(this).toggleClass('active');
    $(".sp_nav").toggleClass('panelactive');
    $(".ham_cover").toggleClass('cover');
  });

  $(".sp_nav a").click(function () {
      $(".ham").removeClass('active');
      $(".sp_nav").removeClass('panelactive');
      $('.ham_cover').removeClass('cover');
  });

  $(document).on('click','.cover', function() {
    $('.ham').removeClass('active');
    $('.ham_cover').removeClass('cover');
    $(".sp_nav").removeClass('panelactive');
  });

  // スライダー
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '14.6%'
  });
  // スライダー
});


