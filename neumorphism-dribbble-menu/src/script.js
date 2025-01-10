let toggle = true;
$(".mode-switch").click(function () {
  $("body").toggleClass("light-mode");
  $(".phone-wrapper").toggleClass("light-mode");
  $(".profile-pic").toggleClass("light-mode");
  $(".shot-image").toggleClass("light-mode");
  $(".inner-shadow").toggleClass("light-mode");
  $(".drop-shadow").toggleClass("light-mode");
  $(".menu-wrapper").toggleClass("light-mode");
  $(".menu:first-child").toggleClass("light-mode");
  if (toggle) {
    $("#light-mode-switch").css("display", "none");
    $("#dark-mode-switch").css("display", "block");
  } else {
    $("#light-mode-switch").css("display", "block");
    $("#dark-mode-switch").css("display", "none");
  }
  toggle = !toggle;
});
