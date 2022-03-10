AOS.init({
  offset: 150,
  duration: 750,
  once: false,
});

function toggleMenu() {
  // let menu = document.querySelector(".navbar-menu");
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

// show / hide navbar

// let prevScrollValue = window.scrollY;

// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".nav-header");

//   console.log(window.scrollY < prevScrollValue ? "1" : "0");

//   navbar.classList[window.scrollY < prevScrollValue ? "remove" : "add"]("hide");

//   prevScrollValue = window.scrollY;
// });
