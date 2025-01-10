function balloonLeft() {
    $("#balloon").animate({left: "-=100%"}, 40000, "swing", balloonRight);
}
function balloonRight() {
    $("#balloon").animate({left: "+=100%"}, 40000, "swing", balloonLeft);
}

balloonRight();