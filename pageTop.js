$(function () {

  $('.card-caption').on('click', 'a', function (e) {
    e.stopPropagation();
  });

  //ページトップへもどる
  $('#js-pageTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
  
});