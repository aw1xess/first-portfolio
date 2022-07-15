$(document).ready(function () {
  $(".gamburger").click(function () {
    $(".gamburger, .menu").toggleClass("closed");
    $("body").toggleClass("lock");
  });
  $(".list_item").click(function () {
    $(".gamburger, .menu").toggleClass("closed");
    $("body").toggleClass("lock");
  });
});
