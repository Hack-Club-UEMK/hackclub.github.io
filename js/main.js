AOS.init({
  offset: 250,
  duration: 1500,
  once: true,
});

function toggleMenu() {
  let menu = document.querySelector(".navbar-menu");
  $(".navbar-menu").slideToggle();
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});



