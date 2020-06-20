$(document).ready(function () {
  registerNavCollapseListener();
});

function registerNavCollapseListener() {
  $(document).click(function (event) {
    // get clicked el
    const clickedEl = $(event.target);
    // check if clicked el is nav or child of nav
    const isNav = clickedEl.is('nav') || $('nav').has(clickedEl).length;
    // if outside of nav and navbar is opened, click toggler to close
    if (!isNav) {
      const isOpened = $('.navbar-collapse').hasClass('show');
      if (isOpened === true && !clickedEl.hasClass('navbar-toggler')) {
        $('.navbar-toggler').click();
      }
    }
  });
}
