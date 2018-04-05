$(document).ready(function() {
  $("#datepicker").datepicker();
  $(".login-button").on("click", () => {
    $(".container").slideToggle();
    });
});
